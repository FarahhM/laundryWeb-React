import React, { Component } from "react";
import cartStore from "../../stores/cartStore";
import OrderSummary from "./OrderSummary";
import { Redirect } from "react-router";
import authStore from "../../stores/authStore";
import Loading from "../Loading";
import { observer } from "mobx-react";
import { Table } from "semantic-ui-react";

class myOrder extends Component {
  componentDidMount() {
    cartStore.fetchOrders();
  }
  render() {
    const loading = cartStore.loading;
    const orders = cartStore.orders;

    const y = orders.map((item) => JSON.stringify(item));
    const x = y.map((item) => JSON.parse(item));
    // console.log("x", x);
    const cartCards = x.map((item) =>
      item.order_items.map((x) => {
        return <OrderSummary key={x.id} item={x} />;
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
            You have not placed an order yet!
          </h2>
        </div>
      </div>
    ) : (
      <div className="content">
        {loading && <Loading />}
        <Table celled className="tableBorder">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Selected Item</Table.HeaderCell>
              <Table.HeaderCell>Service</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Total Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {cartCards}
        </Table>
        <br />
      </div>
    );
  }
}

export default observer(myOrder);
