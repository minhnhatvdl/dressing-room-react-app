import React, { Component } from "react";
import TabPane from "./TabPane/TabPane";
import ButtonArr from "../../../Data/ButtonArr";

class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonArr: ButtonArr
    };
  }
  getSelectedItemTabContent(selectedItem) {
    this.props.getSelectedItemStore(selectedItem);
  }
  render() {
    const templateListTabPane = this.state.buttonArr.map((item, index) => (
      <TabPane
        key={index}
        tabPane={item}
        index={index}
        getSelectedItemTabContent={this.getSelectedItemTabContent.bind(this)}
      />
    ));
    return <div className="tab-content">{templateListTabPane}</div>;
  }
}

export default TabContent;
