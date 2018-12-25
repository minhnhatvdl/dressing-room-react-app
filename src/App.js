import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import Contain from "./Components/Model/Contain";
import BtnGroup from "./Components/Store/BtnGroup";
import Store from "./Components/Store/Store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }
  getSelectedItemApp(selectedItem) {
    this.setState({
      selectedItem
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <BtnGroup />
              <Store getSelectedItemApp={this.getSelectedItemApp.bind(this)} />
            </div>
            <div className="col-lg-4 col-sm-4">
              <Contain selectedItem={this.state.selectedItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
