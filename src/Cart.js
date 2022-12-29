import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { price: 99, title: "Watch", qty: 1, img: "", id: 1 },
        { price: 999, title: "Mobile phone", qty: 10, img: "", id: 2 },
        { price: 999, title: "Laptop", qty: 4, img: "", id: 3 },
      ],
    };
  }
  //we can pass anything to pass,funtion,data,jsx,component;
  increaseQuant = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty++;
    this.setState({ products });
    //console.log(products[index].qty);
  };
  decreaseQuant = (product) => {
    if (product.qty === 0) return;
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty--;
    this.setState({ products });
    //console.log(products[index].qty);
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              increaseQuant={this.increaseQuant}
              decreaseQuant={this.decreaseQuant}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
