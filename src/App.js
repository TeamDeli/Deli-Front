import ProductInfo from './components/ProductInfo';
import ProductReco from './components/ProductReco';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      product: {title: "빙수1", sub: "상품 설명: ", subPlus: "상품 부가 설명: ",
                hash1: "20대 인기상품", hash2: "10대 인기상품"}, 
      pro1: {title1: "상품1", sub1: "상품1 정보", pic1: "images/restmb_allidxmake.jpeg"},
      pro2: {title2: "상품2", sub2: "상품2 정보", pic2: "images/restmb_allidxmake.jpeg"},
      pro3: {title3: "상품3", sub3: "상품3 정보", pic3: "images/restmb_allidxmake.jpeg"},
      pro4: {title4: "상품4", sub4: "상품4 정보", pic4: "images/restmb_allidxmake.jpeg"}
    }
  }

  render() {
    return (
      <div className="App">
        <ProductInfo 
          title={this.state.product.title} 
          sub={this.state.product.sub}
          subPlus={this.state.product.subPlus}
          hash1={this.state.product.hash1}
          hash2={this.state.product.hash2}> 
        </ProductInfo>
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

          title4={this.state.pro4.title4} 
          sub4={this.state.pro4.sub4}
          pic4={this.state.pro4.pic4}>
        </ProductReco>
      </div>
    );
  }
}


export default App;
