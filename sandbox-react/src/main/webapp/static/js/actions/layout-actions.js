import { headerGetJson } from "./tools-action";

export const START_WAITING = "__START_WAITING__";
export const STOP_WAITING = "__STOP_WAITING__";
export const LAYOUT_LOADED = "__LAYOUT_LOADED__";

export const startWaiting = () => ({ type: START_WAITING });
export const stopWaiting = () => ({ type: STOP_WAITING });
export const layoutLoaded = layout => ({ type: LAYOUT_LOADED, layout });

export const getLayout = () => {
  return (dispatch, getState) => {
    dispatch(startWaiting());
    fetch(`/sandbox-react/ajax/layout`, headerGetJson())
      .then(response => response.json())
      .then(function(layout) {
        dispatch(stopWaiting());
        dispatch(layoutLoaded(layout));
      });
  };
};
