import { connect } from 'react-redux';
import Accueil from './../components/accueil';

const mapStateToProps = state => {
    const { username } = state.layoutReducer;
    return { username };
}

const mapDispatchToProps = dispatch => {
    return {};
}

const AccueilContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Accueil);

export default AccueilContainer;