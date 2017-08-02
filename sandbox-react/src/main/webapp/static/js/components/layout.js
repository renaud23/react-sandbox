import React,{Component, Children} from 'react';

class Layout extends Component {
 


    render(){
        return (<div className="layout">{Children.only(this.props.children)}</div>);
    }
}

export default Layout;