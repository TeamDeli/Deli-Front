import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card, Row, Button } from "antd";
import RadioBox from "./Sections/RadioBox";
import RangeSlider from "./Sections/RangeSlider";
import { sex, ages } from "./Sections/Datas";

const { Meta } = Card;

const LandingPage = () => {
  const [Products, setProducts] = useState([]);

  const [Filters, setFilters] = useState({
    sex: [],
    ages: [],
    price: [],
  });

  const getProducts = async () => {
    const response = await axios.get("http://localhost:4000/getProducts");
    if (response.data.success) {
      console.log(response.data);
    }
    console.log(response.data);
    setProducts(response.data);
  };

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          cover={<img alt="example" src={product.image} />}
        >
          <Meta
            style={{}}
            title={product.title}
            description={`${product.price}원`}
          />
        </Card>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    getProducts(filters);
  };

  const handlePrice = (value) => {
    let array = [];
    array = value;
    console.log("array", array);
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const showFilteredWords = () => {
    if (Filters.ages.length !== 0 && Filters.sex.length !== 0) {
      return (
        <div
          style={{
            margin: "3rem auto",
            fontWeight: "900",
            color: "#fd6f22",
          }}
        >
          '{ages[Filters.ages].name} {sex[Filters.sex].name}'에게 인기있는 선물
          중 '{Filters.price[0]}원에서 {Filters.price[1]}원'대의 선물 검색
          결과입니다
        </div>
      );
    }
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      {/* Filter  */}

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <div>성별</div>
          <RadioBox
            list={sex}
            handleFilters={(filters) => handleFilters(filters, "sex")}
          />
          <span>나이</span>
          <RadioBox
            list={ages}
            handleFilters={(filters) => handleFilters(filters, "ages")}
          />
          <span>가격대</span>
          <RangeSlider
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </Col>
      </Row>

      {/* Search  */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      ></div>
      <h3>{showFilteredWords()}</h3>
      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />
    </div>
  );
};

export default LandingPage;
