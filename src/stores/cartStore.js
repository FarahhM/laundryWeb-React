import { decorate, observable, computed } from "mobx";
import { authAxios } from "./instance";
import authStore from "./authStore";
// import itemStore from "./itemStore";
// import authStore from "./authStore";

class CartStore {
  items = [];
  loading = true;
  query = "";
  orders = [];
  addToCart = async (order) => {
    console.log("my order", order);
    try {
      this.items.push(order);
      let response = await authAxios.post("laundry/add-to-cart/", order);
      let data = response.data;
      console.log(data);
      this.loading = false;
    } catch (err) {
      console.log(err.response);
      this.loading = false;
    }
  };

  fetchCartItems = async () => {
    if (authStore.user) {
      try {
        let response = await authAxios.get("laundry/add-to-cart/");
        let data = response.data;
        console.log("cart", data);
        this.items = data;
        this.loading = false;
      } catch (err) {
        console.log(err.response);
        this.loading = false;
      }
    } else {
      console.log("noUser");
    }
  };

  fetchOrders = async () => {
    if (authStore.user) {
      try {
        let response = await authAxios.get("laundry/orders/");
        let data = response.data;
        console.log("myOrder", data);
        this.orders = data;
        this.loading = false;
      } catch (err) {
        console.log(err.response);
        this.loading = false;
      }
    } else {
      console.log("noUser");
    }
  };

  removeFromCart = async (item) => {
    console.log("my order", item);
    try {
      this.items = this.items.filter((filteredItem) => filteredItem !== item);
      await authAxios.post("laundry/remove-from-cart/", item);
      this.fetchCartItems();
    } catch (err) {
      console.log(err.response);
    }
  };

  cartCheckout = async () => {
    let items = this.items;
    try {
      let response = await authAxios.post("laundry/checkout/", items);
      let data = response.data;
      console.log("this order", data);
      this.items = [];
    } catch (err) {
      console.log(err.response);
    }
  };

  get filteredItems() {
    return this.items.map((x) => {
      return x.order_items.filter((item) => {
        return item.item.toLowerCase().includes(this.query.toLowerCase());
      });
    });
  }
}

//removeFromCart
//total for the cart
//checkout

decorate(CartStore, {
  items: observable,
  orders: observable,
  loading: observable,
  query: observable,
  // cartCheckout: observable,
  filteredItems: computed,
});
const cartStore = new CartStore();
// cartStore.fetchCartItems();
// cartStore.fetchOrders();
export default cartStore;
