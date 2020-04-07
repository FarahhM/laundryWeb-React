import React, { Component } from "react";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";
import "../../components/stylesheet.css";
import cartStore from "../../stores/cartStore";
import { Icon } from "semantic-ui-react";

// import message from "../message";

class ItemCard extends Component {
  state = {
    item_price: 0,
    updated_price: 0,
    quantity: 0,
    service: "",
    errors: { service: "", quantity: "" },
  };
  // myAlert = () => {
  //   alert("You have to choose a service first");
  // };
  handleIronPrice = () => {
    const price = this.props.item.iron;
    // console.log("iron ", price);
    this.setState({ item_price: price, service: "Iron" });
    // console.log("item price", this.state.item_price);
  };
  handleDryCleanPrice = () => {
    const price = this.props.item.dry_clean;
    // console.log("dry clean ", price);
    this.setState({ item_price: price, service: "Dry Clean" });
  };
  handleLaundryPrice = () => {
    const price = this.props.item.laundry;
    // console.log("laundry ", price);
    this.setState({ item_price: price, service: "Laundry" });

    // console.log(this.state.service);
  };

  handleIncrement = () => {
    const { service } = this.state;
    let errors = { service: "", quantity: "" };
    if (!service) {
      errors.service = "Please choose a service first";
    }
    this.setState({ errors });
    this.setState(
      {
        updated_price: this.state.updated_price + this.state.item_price,
        quantity: this.state.quantity + 1,
      },

      () => {
        return (
          console.log("updated price ", this.state.updated_price),
          console.log("i am quantity", this.state.quantity)
        );
      }
    );
  };
  handleDecrement = () => {
    const { service } = this.state;
    let errors = { service: "", quantity: "" };
    if (!service) {
      errors.service = "Please choose a service first";
    }
    this.setState({ errors });
    if (this.state.updated_price === 0)
      return this.setState({ updated_price: 0 });
    this.setState(
      {
        updated_price: this.state.updated_price - this.state.item_price,
        quantity: this.state.quantity - 1,
      },
      () => {
        return (
          console.log("updated price ", this.state.updated_price),
          console.log("i am quantity", this.state.quantity)
        );
      }
    );
  };
  handleAdd = (item) => {
    const { service, quantity } = this.state;
    let errors = { service: "", quantity: "" };
    if (!service) {
      errors.service = "Please choose a service first";
    }
    if (!quantity) {
      errors.quantity = "Please specify the quantity";
    }
    this.setState({ errors });
    let order = {
      quantity: this.state.quantity,
      id: item.id,
      total: this.state.updated_price,
      item: item.item_name,
      service: this.state.service,
    };
    if (!errors.quantity && !errors.service) {
      cartStore.addToCart(order);
    }
  };
  render() {
    const item = this.props.item;
    const { errors } = this.state;
    return (
      <div
        style={{
          backgroundColor: "rgb(10, 151, 162)",
          marginBottom: 3,
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h3 className="itemName" style={{ textAlign: "left" }}>
            {item.item_name}
          </h3>
        </div>
        <div style={{ textAlign: "right" }}>
          <Button
            variant="raised"
            size="sm"
            className="priceButton "
            onClick={this.handleIronPrice}
          >
            <h3 className="item">Iron: {item.iron}</h3>
          </Button>
          <Button
            variant="raised"
            size="sm"
            className="priceButton "
            onClick={this.handleDryCleanPrice}
          >
            <h3 className="item">Dry_Clean: {item.dry_clean}</h3>
          </Button>
          <Button
            variant="raised"
            size="sm"
            className="priceButton "
            onClick={this.handleLaundryPrice}
          >
            <h3 className="item">Laundry: {item.laundry}</h3>
          </Button>

          <div className="innerDiv">
            <h3 className="price">Total Price:</h3>
            <Button
              variant="raised"
              className="updattingButton"
              onClick={this.handleIncrement}
            >
              <Icon.Group size="small">
                <Icon name="plus" />
              </Icon.Group>
            </Button>
            <h3 className="price">{this.state.updated_price}</h3>
            <Button
              variant="raised"
              className="updattingButton"
              onClick={this.handleDecrement}
            >
              <Icon.Group size="small">
                <Icon name="minus" />
              </Icon.Group>
            </Button>

            <Button
              className="symbol"
              variant="raised"
              onClick={() => this.handleAdd(item)}
            >
              <Icon.Group size="large">
                <Icon name="cart" />
                <Icon className="symbolAdd" corner name="add" />
              </Icon.Group>
            </Button>
            {errors.service !== "" && (
              <span style={{ color: "red" }}>{this.state.errors.service}</span>
            )}
            <br />
            {errors.quantity !== "" && (
              <span style={{ color: "red" }}>{this.state.errors.quantity}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default observer(ItemCard);
