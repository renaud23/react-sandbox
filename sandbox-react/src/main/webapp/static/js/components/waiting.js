import React, { Component, Children } from "react";

class Waiting extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.layoutReady;
  // }

  render() {
    if (this.props.waitingCount > 0) {
      return (
        <div className="waiting">
          <img src="/sandbox-react/static/images/preloader.png" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Waiting;
