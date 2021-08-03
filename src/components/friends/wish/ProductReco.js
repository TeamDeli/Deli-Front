import { Component } from "react";
import styled from "styled-components";

const RecoWrap = styled.div`
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

class ProductReco extends Component {
  render() {
    return (
      <RecoWrap>
        <h2>비슷한 상품</h2>
        <div class="similar_products">
          <div>
            <img
              src={this.props.pic1}
              width="200px"
              height="200px"
              alt="Product"
            ></img>
            <h3>{this.props.title1}</h3>
            <p>{this.props.sub1}</p>
          </div>
          <div>
            <img
              src={this.props.pic2}
              width="200px"
              height="200px"
              alt="Product"
            ></img>
            <h3>{this.props.title2}</h3>
            <p>{this.props.sub2}</p>
          </div>
          <div>
            <img
              src={this.props.pic3}
              width="200px"
              height="200px"
              alt="Product"
            ></img>
            <h3>{this.props.title3}</h3>
            <p>{this.props.sub3}</p>
          </div>
        </div>
      </RecoWrap>
    );
  }
}

export default ProductReco;
