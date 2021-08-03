import { Component } from 'react';
import './ProductInfo.css';

class ProductReco extends Component {
    render() {
      return (
        <div class="other_product">
            <h2>비슷한 상품</h2>
            <div class="similar_products">
                <div>
                    <img src={this.props.pic1} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.title1}</h3>
                    <p>{this.props.sub1}</p>
                </div>
                <div>
                    <img src={this.props.pic2} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.title2}</h3>
                    <p>{this.props.sub2}</p>
                </div>
                <div>
                    <img src={this.props.pic3} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.title3}</h3>
                    <p>{this.props.sub3}</p>
                </div>
                <div>
                    <img src={this.props.pic4} width="200px" height="200px" alt="Product Image"></img>
                    <h3>{this.props.title4}</h3>
                    <p>{this.props.sub4}</p>
                </div>
            </div>
        </div>
      )
    }
  }

  export default ProductReco;