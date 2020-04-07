import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;

  checkForToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
  setUser = token => {
    if (token) {
      this.user = jwt_decode(token);
      instance.defaults.headers.common.Authorization = `jwt ${token}`;
      localStorage.setItem("token", token);
    } else {
      this.user = null;
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
    }
  };
  signupUser = async newUser => {
    try {
      const res = await instance.post("laundry/signup/", newUser);
      const user = res.data;
      this.setUser(user.token);
      this.signinUser(newUser);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  signinUser = async newUser => {
    try {
      const res = await instance.post("laundry/login/", newUser);
      const user = res.data;
      this.setUser(user.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  logout = () => {
    this.setUser();
  };
}
decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
