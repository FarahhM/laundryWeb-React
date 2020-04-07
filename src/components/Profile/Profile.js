import React, { Component } from "react";
import MyOrder from "./MyOrder";
import authStore from "../../stores/authStore";
import { Icon } from "semantic-ui-react";
import SignupForm from "../../forms/SignupForm";
class Profile extends Component {
  logoutUser = () => {
    authStore.logout();
  };
  render() {
    return authStore.user ? (
      <div className="content">
        <div
          style={{
            backgroundColor: "rgb(10, 151, 162)",
            marginBottom: 30,
            padding: 20,
          }}
        >
          <h1 className="profileHeading">Your Order Informations:</h1>
          <div style={{ textAlign: "right" }}>
            <p
              style={{ color: "white", fontSize: "10", display: "inline" }}
              onClick={this.logoutUser}
            >
              <Icon bordered name="sign-out" onClick={this.logoutUser} />
              Logout
            </p>
          </div>
        </div>
        <MyOrder />
      </div>
    ) : (
      <div className="content">
        <div
          style={{
            backgroundColor: "rgb(10, 151, 162)",
            marginBottom: 30,
            padding: 20,
          }}
        >
          <h1 className="profileHeading">Sign in to view your orders</h1>
          <div style={{ textAlign: "right" }}></div>
        </div>
        <SignupForm />
      </div>
    );
  }
}

export default Profile;
