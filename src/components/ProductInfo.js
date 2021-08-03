import { Component } from 'react';
import './ProductInfo.css';

class ProductInfo extends Component {
    render() {
      return (
        <div class="content">
              {/* 제품 설명 부분 */}
              <div class="product">
                  {/* 사진 부분 */}
                  <div class="product_pic"> 
                      <img src="images/restmb_allidxmake.jpeg" width="300px" height="300px" alt="Product Image"></img>
                  </div>
                  {/*설명 부분*/} 
                  <div class="product_info">
                      <div>
                          <h2>{this.props.title}</h2>
                          {/*별점: https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating*/}
                          <div class="star-ratings">
                              <div class="star-ratings-fill space-x-2 text-lg">
                                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                              </div>
                              <div class="star-ratings-base space-x-2 text-lg">
                                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                              </div>
                          </div>
                          
                          <p>
                            {this.props.sub}
                          </p>
                          <p>
                            {this.props.subPlus}
                          </p>
                          <div class="hash_info">
                              <div class="hash_box">{this.props.hash1}</div>
                              <div class="hash_box">{this.props.hash2}</div>
                          </div>
  
                      </div>
  
                  </div>
              </div>
        </div>
     
  
      )
    }
  }

  export default ProductInfo;