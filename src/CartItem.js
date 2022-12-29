import React from "react";
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = { price: 999, title: "Mobile phone", qty: 1, img: "" };
    // this.increaseQuant = this.increaseQuant.bind(this);
  }
  // increaseQuant = () => {
    // console.log("this", this.state);
    //set state form 1 when we just want to change.
    // this.setState({qty: this.state.qty+1},()=>{console.log("callback")})
    //set state form 2 when we need recent data;
    //set state is Asyncronus call
    //by using Promises setTState work as Syncronus  call.
    // this.setState(
    //   (prevState) => {
    //     return { qty: prevState.qty + 1 };
    //   },
    //   () => {
    //     console.log("Call back funtion");
    //   }
    // ); //call back funtion
    //batching -> when we call setState form 1, 3 times then it
    //swallow them to one songe set state by taking tha last one.
    //solutiin use form 2
    // this.setState({qty: this.state.qty+1});
    // this.setState({qty: this.state.qty+5});
    // this.setState({qty: this.state.qty+10});//only this will be called
  // };
  // decreaseQuant = () => {
  //   console.log("hear");
  //   this.setState((prevState) => {
  //     if (prevState.qty === 0) {
  //       return 0;
  //     }
  //     return { qty: prevState.qty - 1 };
  //   });
  // };
  render() {
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            alt=""
            style={styles.image}
            onMouseOver={() => console.log("above image")}
          />
        </div>
        <div CartItem="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs. {price}</div>
          <div style={{ color: "#ccc" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              onClick={() => this.props.increaseQuant(this.props.product)}
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            />
            <img
              alt="decrease"
              className="action-icons"
              onClick={() => this.props.decreaseQuant(this.props.product)}
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 120,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
