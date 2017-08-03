import React, { Component, Children } from "react";

class Layout extends Component {
  render() {
    const { waiting } = this.props;
    return (
      <div className="layout">
        {waiting ? <PreLoader /> : null}
        {Children.only(this.props.children)}
      </div>
    );
  }
}

const PreLoader = () =>
  <div className="waiting">
    <img src="/sandbox-react/static/images/preloader.png" />
  </div>;

export default Layout;
