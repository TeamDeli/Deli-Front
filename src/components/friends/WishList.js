import styled from "styled-components";
import React from "react";

const WishWrap = styled.div`
  h2 {
    margin-top: 50px;
    padding: 20px;
  }
  .wishContainer {
    display: flex;
    align-items: center;
  }
  h3 {
    text-align: center;
  }
`;
const WishList = (props) => {
  const { friendName, wishList } = props;
  console.log("props:", props);
  return (
    <WishWrap>
      <h2>{friendName}님이 좋아하신 상품입니다.</h2>
      {wishList.length === 0 ? (
        <h3>no items..</h3>
      ) : (
        <span className="wishContainer">
          {wishList.map((product, index) => {
            return (
              <div className="productContainer" id={index}>
                <img
                  className="productImage"
                  src={product.img}
                  alt={product.title}
                  width="200px"
                  height="200px"
                ></img>
                <h3>{product.title}</h3>
              </div>
            );
          })}
        </span>
      )}
    </WishWrap>
  );
};

export default WishList;
