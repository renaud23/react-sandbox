import React,{Component, Children} from 'react';

class Layout extends Component {
 


    render(){
        return (<div>{Children.only(this.props.children)}</div>);
    }
}

export default Layout;