import {
  UTILISATEUR_LOADED,
  PRODUIT_LOADED
} from "./../actions/accueil-actions";

const initialState = { utilisateur: { prenom: "", nom: "" }, produit: null };

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UTILISATEUR_LOADED: {
      const { utilisateur } = action;
      return Object.assign({}, state, { utilisateur });
    }
    case PRODUIT_LOADED: {
      const { produit } = action;
      return Object.assign({}, state, { produit });
    }
    default:
      return state;
  }
};

export default applicationReducer;
