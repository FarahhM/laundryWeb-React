import React, { Component } from "react";
import { observer } from "mobx-react";
import CartCard from "./CartCard";
import "../../components/stylesheet.css";
import cartStore from "../../stores/cartStore";
import { Redirect } from "react-router-dom";
import authStore from "../../stores/authStore";
import { Button } from "react-bootstrap";
import Loading from "../Loading";

class cartItems extends Component {
  componentDidMount() {
    cartStore.fetchCartItems();
  }

  handleCheckout = () => {
    cartStore.fetchOrders();
    cartStore.cartCheckout();
    // cartStore.fetchCartItems();
  };

  render() {
    const loading = cartStore.loading;
    const items = cartStore.items;
    const y = items.map((item) => JSON.stringify(item));
    const x = y.map((item) => JSON.parse(item));
    // console.log("x", x);
    const cartCards = x.map((item) =>
      item.order_items.map((x) => {
        return <CartCard key={x.id} item={x} />;
      })
    );

    const k = x.map((item) =>
      item.order_items.map((x) => {
        return x;
      })
    );
    const l = k[0];
    if (authStore.user === null) return <Redirect to="/signup/" />;
    return l === undefined || l.length === 0 ? (
      <div className="content">
        <div
          style={{
            backgroundColor: "#bdbdbd ",
            marginBottom: 3,
          }}
        >
          <h2
            style={{
              fontFamily: "Impact",
              color: "white",
              textAlign: "center",
            }}
          >
            There is No Items in your Cart Yet!
          </h2>
        </div>
      </div>
    ) : (
      <div className="content">
        <div style={{ backgroundColor: "rgb(10, 151, 162)", marginBottom: 30 }}>
          <h1 className="cartTitle">Your Cart:</h1>
        </div>
        {loading && <Loading />}
        <div className="cartCards">{cartCards}</div>

        <div className="ckeckoutDiv">
          <Button
            className="checkout"
            variant="raised"
            size="sm"
            onClick={this.handleCheckout}
          >
            checkout
          </Button>
        </div>
      </div>
    );
  }
}

export default observer(cartItems);
//you must create a search bar so that you include it before the cards
