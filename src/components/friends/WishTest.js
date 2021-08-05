import React, { useCallback, useState } from "react";
import Styled from "styled-components";

const WishWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
  margin: 50px;
  padding: 20px;
  border: 2px solid red;
  
  .item{
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
`;

const WishTest = () => {
  return (
    <WishWrap>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </WishWrap>
  );
};

export default WishTest;
