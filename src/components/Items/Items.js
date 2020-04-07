import React, { Component } from "react";
import { observer } from "mobx-react";
import itemStore from "../../stores/itemStore";
import ItemCard from "./ItemCard";
import "../../components/stylesheet.css";
import SearchBar from "../SearchBar/index";
class Items extends Component {
  componentDidMount() {
    itemStore.fetchItems();
  }
  render() {
    const itemCards = itemStore.filteredItems.map(item => (
      <ItemCard key={item.id} item={item} />
    ));
    return (
      <div className="content">
        <SearchBar store={itemStore} />
        <div className="itemtCards">{itemCards}</div>
      </div>
    );
  }
}

export default observer(Items);
//you must create a search bar so that you include it before the cards
