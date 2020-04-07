import React, { Component } from "react";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { observer } from "mobx-react";
import SignupForm from "./forms/SignupForm";
import SigninForm from "./forms/SigninForm";
import { Switch, Route, Redirect } from "react-router-dom";
import Items from "./components/Items/Items";
import CartItems from "./components/Cart/CartItems";
import Tabs from "./components/Nav/Tabs";
import { Link } from "react-router-dom";
import "./components/stylesheet.css";
import Profile from "./components/Profile/Profile";
import myOrder from "./components/Profile/MyOrder";

class App extends Component {
  getView() {
    return (
      <Switch>
        <Redirect exact from="/" to="/Home/" />
        <Route path="/profile/" component={Profile} />
        <Route path="/signup/" component={SignupForm} />
        <Route path="/login/" component={SigninForm} />
        <Route path="/item-list/" component={Items} />
        <Route path="/add-to-cart/" component={CartItems} />
        <Route path="remove-from-cart/" component={CartItems} />
        <Route path="/home/" component={Home} />
        <Route path="/orders/" component={myOrder} />
      </Switch>
    );
    // }
  }
  render() {
    return (
      <div>
        <nav className="navbar ">
          <Link to="/" className="navbar-brand">
            myLaundry
          </Link>
          <ul className="nav nav-tabs justify-content-end">
            <Tabs />
          </ul>
        </nav>
        {this.getView()}
      </div>
    );
  }
}

export default observer(App);
