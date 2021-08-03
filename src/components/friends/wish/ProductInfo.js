import { Component } from "react";
import styled from "styled-components";

const InfoWrap = styled.div`
  .content {
    position: relative;
    top: 50px;
    display: grid;
    grid-template-rows: auto;
    padding: 10px;
  }

  .product {
    /*text-align: center;*/
    float: left;
    display: flex; /*가로로 배치하기*/
    flex-direction: row;
  }

  .product_info {
    float: left;
    display: flex; /*가로로 배치하기*/
    flex-direction: row;
  }

  .star-ratings {
    color: #aaa9a9;
    position: relative;
    unicode-bidi: bidi-override;
    width: max-content;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: #2b2a29;
  }

  .star-ratings-fill {
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
  }

  .star-ratings-base {
    z-index: 0;
    padding: 0;
  }

  /*# 정보 디자인 가로 정렬 & 20px 간격*/
  .hash_info {
    float: left;
    display: flex; /*가로로 배치하기*/
    flex-direction: row;
  }
  .hash_info div {
    margin-right: 20px;
  }
  .hash_info .hash_box {
    color: orange;
    margin-right: 20px;
    padding: 5px 5px 5px 5px;
    border: 2px solid orange;
    border-radius: 15px 15px 15px 15px;
  }
  .hash_box:before {
    content: "# ";
  }

  .other_product {
    position: relative;
    padding: 50px;
  }

  .similar_products {
    display: grid; /*가로로 배치하기*/
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .similar_products div {
    padding: 10px 0px 10px 0px;
    text-align: center;
  }
`;

const starWrap = styled.div`
  .content {
    position: relative;
    top: 50px;
    display: grid;
    grid-template-rows: auto;
  }

  .product {
    /*text-align: center;*/
    float: left;
    display: flex; /*가로로 배치하기*/
    flex-direction: row;
  }

  .star-ratings {
    color: #aaa9a9;
    position: relative;
    unicode-bidi: bidi-override;
    width: max-content;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: #2b2a29;
  }

  .star-ratings-fill {
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
  }

  .star-ratings-base {
    z-index: 0;
    padding: 0;
  }

  /*# 정보 디자인 가로 정렬 & 20px 간격*/
  .hash_info {
    float: left;
    display: flex; /*가로로 배치하기*/
    flex-direction: row;
  }
  .hash_info p {
    margin-right: 20px;
  }

  .other_product {
    position: relative;
    top: 50px;
  }

  .similar_product > div {
    display: flex; /*가로로 배치하기*/
  }
`;

class ProductInfo extends Component {
  render() {
    return (
      <InfoWrap>
        <div class="content">
          {/* 제품 설명 부분 */}
          <div class="product">
            {/* 사진 부분 */}
            <div class="product_pic">
              <img
                src="images/restmb_allidxmake.jpeg"
                width="300px"
                height="300px"
                alt="Product Image"
              ></img>
            </div>
            {/*설명 부분*/}
            <div class="product_info">
              <div>
                <h2>{this.props.title}</h2>
                {/*별점: https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating*/}
                <div class="star-ratings">
                  <div class="star-ratings-fill space-x-2 text-lg">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div class="star-ratings-base space-x-2 text-lg">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>

                <p>{this.props.sub}</p>
                <p>{this.props.subPlus}</p>
                <div class="hash_info">
                  <div class="hash_box">{this.props.hash1}</div>
                  <div class="hash_box">{this.props.hash2}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InfoWrap>
    );
  }
}

export default ProductInfo;
