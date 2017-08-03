import { connect } from 'react-redux';
import Accueil from './../components/accueil';
import { getUtilisateur } from './../actions/accueil-actions';

const mapStateToProps = state => {
    const { prenom, nom } = state.applicationReducer.utilisateur;
    return { prenom, nom };
}

const mapDispatchToProps = dispatch => {
    return {
        getUtilisateur: (nom, prenom) => {
            dispatch(getUtilisateur(nom, prenom));
        }
    };
}

const AccueilContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Accueil);

export default AccueilContainer;