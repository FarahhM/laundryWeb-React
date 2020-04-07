import React, { Component } from "react";
import { observer } from "mobx-react";

import "../../components/stylesheet.css";
class searchBar extends Component {
  render() {
    const store = this.props.store;

    return (
      <div>
        <form className="searchBar searchBarActive mb-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            onChange={text => (store.query = text.target.value)}
            value={store.query}
          />
        </form>
      </div>
    );
  }
}

export default observer(searchBar);
