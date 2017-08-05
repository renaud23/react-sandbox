import { connect } from "react-redux";
import Layout from "./../components/layout";
import { getLayout } from "./../actions/layout-actions";

const mapStateToProps = state => {
  const { waiting, layoutReady } = state.layoutReducer;
  return { waiting, layoutReady };
};

const mapDispatchToProps = dispatch => {
  return {
    getLayout: () => {
      dispatch(getLayout());
    }
  };
};

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default LayoutContainer;
