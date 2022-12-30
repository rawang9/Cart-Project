import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component {
  constructor() {
    console.log("Constructed");
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile phone",
          qty: 10,
          img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60",
          id: 3,
        },
      ],
    };
  }
  // componentDidMount(){
  //   console.log("call first time only one time to fetch api");
  // };
  // componentDidUpdate(prevProps,prevState){
  //   console.log("whenever change occur in this.state this will be called with 2 props",prevState);
  // };
  // componentWillUnmount(){
  //   console.log("when componenet is distroyed use it to free up the memory")
  // };
  //binding class method so that we can use together.(method must return this;) A.getPrice().intrest().
  //we can pass anything to pass,funtion,data,jsx,component;
  increaseQuant = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty++;
    this.setState({ products });
    //console.log(products[index].qty);
  };
  decreaseQuant = (product) => {
    if (product.qty === 1) return this.deleteItem(product.id);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty--;
    this.setState({ products });
    //console.log(products[index].qty);
  };
  deleteItem = (id) => {
    const { products } = this.state;
    const remain = products.filter((item) => item.id !== id);
    this.setState({ products: remain });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getTotal = ()=>{
    const {products} = this.state;
    let total = 0;
    products.forEach((item)=> {total+=(item.price * item.qty)})
    return total;
  }
  render() {
    console.log("render");
    const { products } = this.state;
    return (
      <div>
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          increaseQuant={this.increaseQuant}
          decreaseQuant={this.decreaseQuant}
          deleteItem={this.deleteItem}
        />
      <div style = {{padding:10,fontSize:30}}>Total : {this.getTotal()}</div>
      </div>
    );
  }
}

export default App;
