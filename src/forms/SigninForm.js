import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import "../components/stylesheet.css";

class SigninForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    authStore.signinUser(this.state);
  };
  render() {
    // const { username, password } = this.state;

    // if (authStore.user) return <Redirect to="/item-list/" />;
    if (authStore.user) return <Redirect to="/home/" />;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="inputContainer">
            <label
              style={{
                fontFamily: "Impact",
                color: "rgb(10, 151, 162)",
                marginRight: 7
              }}
            >
              Username:{" "}
            </label>
            <input
              type="text"
              className="inputs"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputContainer">
            <label
              style={{
                fontFamily: "Impact",
                color: "rgb(10, 151, 162)",
                marginRight: 7
              }}
            >
              Password:{" "}
            </label>
            <input
              type="text"
              className="inputs"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="buttonDiv">
            Login
          </button>
        </div>
      </form>
    );
  }
}
export default observer(SigninForm);
