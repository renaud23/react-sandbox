import { UTILISATEUR_LOADED } from "./../actions/accueil-actions";

const initialState = { utilisateur: { prenom: "", nom: "" } };

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UTILISATEUR_LOADED: {
      const { utilisateur } = action;
      return Object.assign({}, state, { utilisateur });
    }
    default:
      return state;
  }
};

export default applicationReducer;
