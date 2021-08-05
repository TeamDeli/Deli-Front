import styled from "styled-components";
import React from "react";

const WishWrap = styled.div``;
const WishList = (props) => {
  const { friendName, wishList } = props;
  console.log("props:", props);
  return (
    <WishWrap>
      <h2>{friendName}이 좋아하신 상품입니다.</h2>
      {wishList.length === 0 ? (
        <h3>no items..</h3>
      ) : (
        wishList.map((product) => {
          return (
            <span className="wishContainer">
              <div className="productContainer">
                <img
                  src={product.img}
                  alt={product.title}
                  width="200px"
                  height="200px"
                ></img>
                <h3>{wishList.title}</h3>
              </div>
            </span>
          );
        })
      )}
    </WishWrap>
  );
};

export default WishList;
