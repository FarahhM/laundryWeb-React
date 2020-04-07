import React, { Component } from "react";
import { observer } from "mobx-react";
import classficationStore from "../../stores/classficationStore";
import { Content, List } from "react-bootstrap/lib/Tab";
import ClassificationItem from "./ClassificationItem";

class Classification extends Component {
  render() {
    const classfication = classficationStore.classfication;
    let Items;
    if (classfication) {
      Items = classfication.map(item => (
        <ClassificationItem classification={item} key={item.id} />
      ));
    }
    return (
      <Content>
        <List>{Items}</List>
      </Content>
    );
  }
}

export default observer(Classification);
