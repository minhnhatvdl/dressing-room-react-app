import React, { Component } from "react";
import Item from "./Item/Item";
import Instance from "../../../../Data/Instance";

class TabPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: Instance.room
    };
  }
  getListItem() {
    return this.state.listItem.filter(
      item => item.type === this.props.tabPane.type
    );
  }
  getTemplateTabPane() {
    const templateTabPane = this.getListItem().map((item, index) => {
      return <Item key={index} item={item} />;
    });
    return templateTabPane;
  }
  render() {
    const templateTabPane = this.getTemplateTabPane();
    let tabPaneActiveClass = this.props.index === 0 ? "active" : "";
    return (
      <div
        className={`tab-pane fade in ${tabPaneActiveClass}`}
        id={this.props.tabPane.tabName}
      >
        <div className="row">{templateTabPane}</div>
      </div>
    );
  }
}

export default TabPane;
