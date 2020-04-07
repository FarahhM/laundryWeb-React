import React, { Component } from "react";
import Tab from "./Tab";
// import { observer } from "mobx-react";
// import { Link } from "react-router-dom";
const data = {
  total: [
    { id: 1, name: "Home", location: "/home/" },
    { id: 2, name: "Services", location: "/item-list/" },
    { id: 3, name: "Cart", location: "/add-to-cart/" },
    { id: 4, name: "Profile", location: "/profile/" }
  ]
};

class Tabs extends Component {
  state = { activeTabID: "" };

  setActiveTab = activeTabID => {
    this.setState({ activeTabID: activeTabID });
    console.log(`rendering content for item id - ${activeTabID}`);
  };
  // isActive= id=>{
  //   return this.state.activeTabID===id
  // }
  render() {
    const { activeTabID } = this.state;
    var total = data.total;
    return total.map((el, i) => {
      return (
        <Tab
          key={i}
          content={el.name}
          to={el.location}
          activeTabID={el.id}
          isActive={activeTabID === el.id}
          setActiveTab={this.setActiveTab}
        />
      );
    });
  }
}

export default Tabs;
