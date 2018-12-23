import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import Contain from "./Components/Model/Contain";
import BtnGroup from "./Components/Store/BtnGroup";
import Store from "./Components/Store/Store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <BtnGroup />
              <Store />
            </div>
            <div className="col-lg-6 col-sm-6">
              <Contain />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
