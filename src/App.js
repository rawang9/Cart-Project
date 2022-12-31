import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }
  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     this.setState({ products, loading: false });
    //   });
    firebase
      .firestore()
      .collection("products")
      // .where('price','==',999)//condion while fetching data
      // .where('title','==','Laptop')//codition
      .orderBy('price','desc')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products, loading: false });
      });
  }
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
    // products[index].qty++;
    // this.setState({ products });
    //console.log(products[index].qty);
    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(products[index].id);
    docRef
      .update({ qty: products[index].qty + 1 })
      .then(() => {
        console.log("increses");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  decreaseQuant = (product) => {
    if (product.qty === 1) return this.deleteItem(product.id);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty--;
    // this.setState({ products });
    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(products[index].id);
    docRef
      .update({ qty: products[index].qty - 1 })
      .then(() => console.log("Decressed"))
      .catch((error) => console.log("error ", error));
  };
  deleteItem = (id) => {
    // const { products } = this.state;
    console.log(id);
    // const remain = products.filter((item) => item.id !== id);
    // this.setState({ products: remain });
    const docRef = firebase.firestore().collection("products").doc(id);
    docRef
      .delete()
      .then(() => console.log("deleted"))
      .catch((err) => console.log(err));
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  };
  addProduct = () => {
    firebase
      .firestore()
      .collection("products")
      .add({
        title: "Washing Machine",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lg.com%2Fin%2Fimages%2Fwashing-machines%2Fmd07540744%2Fgallery%2FFHM1207BDL-Washing-Machines-Front-View-D-01.jpg&imgrefurl=https%3A%2F%2Fwww.lg.com%2Fin%2Fwashing-machines%2Flg-fhm1207bdl&tbnid=LvjAJ_aQ8ZHo3M&vet=12ahUKEwjay62tl6P8AhW9j9gFHX_aCxgQMygBegUIARDjAQ..i&docid=B2yU6AZybQD59M&w=1100&h=730&q=washing%20machine&ved=2ahUKEwjay62tl6P8AhW9j9gFHX_aCxgQMygBegUIARDjAQ",
        qty: 12,
        price: 1001,
      })
      .then((docRef) => {
        console.log("Product added", docRef);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add New Product
        </button> */}
        <Cart
          products={products}
          increaseQuant={this.increaseQuant}
          decreaseQuant={this.decreaseQuant}
          deleteItem={this.deleteItem}
        />
        {loading && <h1>Loading Data...</h1>}
        <div style={{ padding: 10, fontSize: 30 }}>
          Total : {this.getTotal()}
        </div>
      </div>
    );
  }
}

export default App;
