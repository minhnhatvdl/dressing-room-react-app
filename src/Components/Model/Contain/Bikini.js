import React, { Component } from "react";

class Bikini extends Component {
  render() {
    const styles = {
      // .bikiniTop
      bikiniTopClass: {
        width: "250px",
        height: "500px",
        background: 'url("images/allbody/bikini_branew.png")',
        position: "absolute",
        top: "12%",
        left: "22%",
        zIndex: "1"
      }, // .bikiniBottom
      bikiniBottomClass: {
        width: "250px",
        height: "500px",
        background: 'url("images/allbody/bikini_pantsnew.png")',
        position: "absolute",
        top: "12%",
        left: "22%",
        zIndex: "1"
      }
    };
    const styleBikini =
      this.props.type === "top"
        ? styles.bikiniTopClass
        : styles.bikiniBottomClass;
    return <div style={styleBikini} />;
  }
}

export default Bikini;
