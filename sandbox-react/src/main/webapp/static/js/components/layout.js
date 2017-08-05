import React, { Component, Children } from "react";
import Waiting from "./../containers/waiting-container";

class Layout extends Component {
  componentDidMount() {
    this.props.getLayout();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.layoutReady;
  }

  render() {
    return (
      <div className="layout">
        <Waiting />
        {Children.only(this.props.children)}
      </div>
    );
  }
}

export default Layout;
