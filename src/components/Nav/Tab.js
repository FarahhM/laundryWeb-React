import React, { Component } from "react";
import "../stylesheet.css";

class Tab extends Component {
  setActiveTab = e => {
    const { activeTabID, setActiveTab } = this.props;

    setActiveTab(activeTabID);
  };
  render() {
    const { isActive } = this.props;
    // console.log(isActive);
    const tabClass = `nav-link  ${isActive && "active"}`;
    return (
      <li onClick={this.setActiveTab}>
        <a className={tabClass} href={this.props.to}>
          {this.props.content}
        </a>
      </li>
    );
  }
}

export default Tab;
