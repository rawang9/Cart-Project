import React from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            increaseQuant={props.increaseQuant}
            decreaseQuant={props.decreaseQuant}
            deleteItem={props.deleteItem}
          />
        );
      })}
    </div>
  );
};

export default Cart;
