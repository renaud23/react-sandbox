import { connect } from "react-redux";
import Waiting from "./../components/waiting";

const mapStateToProps = state => {
  const { waiting, layoutReady, waitingCount } = state.layoutReducer;
  return { waiting, layoutReady, waitingCount };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const WaitingContainer = connect(mapStateToProps, mapDispatchToProps)(Waiting);

export default WaitingContainer;
