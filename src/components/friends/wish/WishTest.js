import React, { useCallback, useState } from "react";
import Styled from "styled-components";
import ProductReco from "./ProductReco";
import { Component } from "react";

class WishTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        title: "빙수1",
        sub: "상품 설명: ",
        subPlus: "상품 부가 설명: ",
        hash1: "20대 인기상품",
        hash2: "10대 인기상품",
      },
      pro1: {
        title1: "상품1",
        sub1: "상품1 정보",
        pic1: "../bingsu.jpeg",
      },
      pro2: {
        title2: "상품2",
        sub2: "상품2 정보",
        pic2: "../bingsu.jpeg",
      },
      pro3: {
        title3: "상품3",
        sub3: "상품3 정보",
        pic3: "../bingsu.jpeg",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <ProductReco
          title1={this.state.pro1.title1}
          sub1={this.state.pro1.sub1}
          pic1={this.state.pro1.pic1}
          title2={this.state.pro2.title2}
          sub2={this.state.pro2.sub2}
          pic2={this.state.pro2.pic2}
          title3={this.state.pro3.title3}
          sub3={this.state.pro3.sub3}
          pic3={this.state.pro3.pic3}
        ></ProductReco>
      </div>
    );
  }
}

export default WishTest;
