import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Icon, Message } from "semantic-ui-react";
import "../components/stylesheet.css";

class SignupForm extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    authStore.signupUser(this.state);
  };
  render() {
    // const { username, email, password } = this.state;
    // if (authStore.user) return <Redirect to="/Home/" />;
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
              Email:{" "}
            </label>
            <input
              type="text"
              className="inputs"
              name="email"
              placeholder="Email"
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
            Register
          </button>
          <Message warning>
            <Icon name="help" />
            Already signed up?&nbsp;<a href="/login/">Login here</a>
            &nbsp;instead.
          </Message>
        </div>
      </form>
    );
  }
}

export default observer(SignupForm);
