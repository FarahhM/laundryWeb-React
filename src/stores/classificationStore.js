import { decorate, observable } from "mobx";
import { instance } from "./instance";

class ClassificationStore {
  classfications = [];
  loading = true;

  fetchClassification = async () => {
    try {
      let response = await instance.get("laundry/classification/");
      let data = response.data;
      console.log(data);
      // .then(item => {
      //   this.classifications = item;
      //   this.loading = false;
      // })
    } catch (err) {
      console.log(err.response.data);
    }
  };
  //   .then(res => res.data)
  //   .then(item => {
  //     this.classifications = item;
  //     this.loading = false;
  //   })
  //   .cath(err => console.error(err));
  // }
  getClassificationByID(id) {
    return this.classfications.find(item => +item.id === +id);
  }
}
decorate(ClassificationStore, {
  classfication: observable,
  loading: observable
});
const classficationStore = new ClassificationStore();
classficationStore.fetchClassification();
export default classficationStore;
//why itemByID has to have + at the beginiing of id
