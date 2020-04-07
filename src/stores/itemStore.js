import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class ItemStore {
  items = [];
  fetchedItem = null;
  loading = true;
  query = "";

  fetchItems = async () => {
    try {
      let response = await instance.get("laundry/item-list/");
      let data = response.data;
      console.log("data", data);
      this.items = data;
      this.loading = false;
    } catch (err) {
      console.error(err.response);
    }
  };
  get filteredItems() {
    return this.items.filter(item => {
      return item.item_name.toLowerCase().includes(this.query.toLowerCase());
    });
  }
  getItemById(itemID) {
    let item = this.items.find(item => item.id === itemID);
    if (item) {
      this.loading = false;
      this.fetchedItem = item;
    } else {
      console.log("this item doesn't exist");
    }
  }
}
decorate(ItemStore, {
  items: observable,
  loading: observable,
  query: observable,
  filteredItems: computed
});
const itemStore = new ItemStore();
// itemStore.fetchItems();
export default itemStore;
//what does getItemById do?
