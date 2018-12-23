import React, { Component } from "react";
import Item from './Item/Item';
import Instance from '../../../../Data/Instance';

class TabPane extends Component {
  render() {
    console.log(Instance);
    
    let tabPaneActiveClass = this.props.index === 0 ? "active" : "";
    return (
      <div
        className={`tab-pane fade in ${tabPaneActiveClass}`}
        id={this.props.tabPane.tabName}
      >
        <Item name={this.props.tabPane.showName} />
      </div>
    );
  }
}

export default TabPane;
