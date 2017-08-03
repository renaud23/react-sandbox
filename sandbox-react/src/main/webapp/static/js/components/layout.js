import React, { Component, Children } from 'react';

class Layout extends Component {

    render() {
        const { waiting } = this.props;
        return (
            <div className="layout">
                { waiting ? <PreLoader /> : null }
                { Children.only(this.props.children) }
            </div>
        );
    }
}


const PreLoader = () => (<div><img src="/sandbox-react/static/images/preloader.gif" /></div>);

export default Layout;