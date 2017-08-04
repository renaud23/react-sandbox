import { UTILISATEUR_LOADED } from "./../actions/accueil-actions";
import { START_WAITING, STOP_WAITING } from "./../actions/layout-actions";

const initialState = { waiting: false };

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_WAITING: {
      return Object.assign({}, state, { waiting: true });
    }
    case STOP_WAITING: {
      return Object.assign({}, state, { waiting: false });
    }
    default:
      return state;
  }
};

export default layoutReducer;
