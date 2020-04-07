import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { observer } from "mobx-react";
class orderSummary extends Component {
  render() {
    const item = this.props.item;
    // console.log("items", item);
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>{item.item}</Table.Cell>
          <Table.Cell>{item.service}</Table.Cell>
          <Table.Cell>x{item.quantity}</Table.Cell>
          <Table.Cell>{item.item_price}</Table.Cell>

          {/* <Table.Cell>{item.item_price}</Table.Cell> */}
        </Table.Row>
      </Table.Body>
    );
  }
}

export default observer(orderSummary);
