import { UTILISATEUR_LOADED } from "./../actions/accueil-actions";
import {
  START_WAITING,
  STOP_WAITING,
  LAYOUT_LOADED
} from "./../actions/layout-actions";

const initialState = { waiting: false, layout: null, layoutReady: false };

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYOUT_LOADED: {
      const { layout } = action;
      return Object.assign({}, state, { layout, layoutReady: true });
    }
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
