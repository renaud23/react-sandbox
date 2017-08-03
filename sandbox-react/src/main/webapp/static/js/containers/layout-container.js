import { connect } from 'react-redux';
import Layout from './../components/layout';


const mapStateToProps = state => {
    const { waiting } = state.layoutReducer;
    return { waiting };
}

const mapDispatchToProps = dispatch => {
    return {};
}

const LayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);

export default LayoutContainer;