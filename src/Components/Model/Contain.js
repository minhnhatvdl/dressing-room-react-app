import React, { Component } from "react";
import Body from "./Contain/Body";
import Model from "./Contain/Model";
import Bikini from "./Contain/Bikini";
import Feet from "./Contain/Feet";

const styles = {
  // .contain
  containClass: {
    width: "460px",
    height: "590px",
    margin: "0 auto",
    background: 'url("./images/background/background_998.jpg")',
    position: "relative"
  }
};

export default class Contain extends Component {
  render() {
    return (
      <div style={styles.containClass}>
        <Body />
        <Model />
        <Bikini type="top" />
        <Bikini type="bottom" />
        <Feet type="left" />
        <Feet type="right" />
      </div>
    );
  }
}
