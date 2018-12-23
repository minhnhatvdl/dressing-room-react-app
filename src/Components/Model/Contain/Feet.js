import React, { Component } from "react";

class Feet extends Component {
  render() {
    const styles = {
      // .feetLeft
      feetLeftClass: {
        width: "25px",
        height: "41px",
        background: 'url("images/allbody/feet_high_leftnew.png")',
        position: "absolute",
        bottom: "6.5%",
        left: "40.4%",
        zIndex: "1"
      },
      // .feetRight
      feetRightClass: {
        width: "25px",
        height: "41px",
        background: "url(images/allbody/feet_high_rightnew.png)",
        position: "absolute",
        bottom: "6.5%",
        right: "33.3%",
        zIndex: "1"
      }
    };
    const styleFeet =
      this.props.type === "left" ? styles.feetLeftClass : styles.feetRightClass;
    return <div style={styleFeet} />;
  }
}

export default Feet;
