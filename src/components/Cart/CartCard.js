import React, { Component } from "react";
import { observer } from "mobx-react";
import "../../components/stylesheet.css";
import { Button } from "react-bootstrap";
import cartStore from "../../stores/cartStore";
import { Card } from "semantic-ui-react";

class CartCard extends Component {
  handleRemove = item => {
    cartStore.removeFromCart(item);
  };
  render() {
    const item = this.props.item;

    return (
      <div>
        <Card.Group>
          <Card className="cartCardColor">
            <Card.Content>
              <div style={{ textAlign: "right" }}>
                <Button
                  variant="raised"
                  size="sm"
                  className="removeButton"
                  onClick={() => this.handleRemove(item)}
                >
                  X
                </Button>
              </div>
              <Card.Header
                style={{ fontFamily: "Impact", color: "rgb(10, 151, 162)" }}
              >
                {item.item}
              </Card.Header>
              <Card.Description style={{ color: "#878787" }}>
                Price: {item.item_price}KD
              </Card.Description>

              <Card.Meta className={"cartDetails"}>
                Service: {item.service}
              </Card.Meta>
              <Card.Meta className={"cartDetails"}>
                Quantity: {item.quantity}
              </Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default observer(CartCard);
