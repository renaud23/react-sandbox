import { connect } from "react-redux";
import Accueil from "./../components/accueil";
import { getUtilisateur, getProduit } from "./../actions/accueil-actions";

const mapStateToProps = state => {
  const { produit } = state.applicationReducer;
  const { prenom, nom } = state.applicationReducer.utilisateur;
  return { prenom, nom, produit };
};

const mapDispatchToProps = dispatch => {
  return {
    getUtilisateur: (nom, prenom) => {
      dispatch(getUtilisateur(nom, prenom));
    },
    getProduit: id => {
      dispatch(getProduit(id));
    }
  };
};

const AccueilContainer = connect(mapStateToProps, mapDispatchToProps)(Accueil);

export default AccueilContainer;
