import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-12">
        <div className="thumbnail">
          <img src={this.props.item.imgSrc_jpg} alt={this.props.item.desc} />
          <div className="caption">
            <button className="btn btn-primary">Try it on</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
