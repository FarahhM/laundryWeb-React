import React, { Component } from "react";
import { observer } from "mobx-react";

import "./stylesheet.css";

class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <div className="one">
          <h1>About myLaundry:</h1>
          <p>
            a group of caring workers that aim to provide you with professional
            services at a great price.
          </p>
        </div>
        <div className="two">
          <h1>Our services: </h1>
          <ul>
            <li>
              <strong>Iron:</strong> your items will be perfectly ironed.{" "}
            </li>
            <li>
              <strong>Dry Clean:</strong> your items will be washed with our
              special solvent, where they will end up with soft touch and nice
              smell.
            </li>
            <li>
              <strong>Laundry:</strong> your items will be washed & ironed.
            </li>
          </ul>
        </div>
        <div className="three">
          <h1>How it Works: </h1>
          <ol>
            <li>Place an order with the desired service.</li>
            <li>Choose a suitable time for a home pick-up.</li>
            <li>Your items are now under our care.</li>
            <li>
              Your items will be delivered within the expected time nice &
              clean.
            </li>
            <li>Cash & K-net payments are available upon delivery.</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default observer(Home);
