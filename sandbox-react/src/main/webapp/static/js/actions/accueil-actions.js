import { startWaiting, stopWaiting } from "./layout-actions";
import { headerGetJson } from "./tools-action";

export const UTILISATEUR_LOADED = "__UTILISATEUR_LOADED__";
export const PRODUIT_LOADED = "__PRODUIT_LOADED__";

export const getUtilisateur = (prenom, nom) => {
  return (dispatch, getState) => {
    dispatch(startWaiting());
    fetch(`/sandbox-react/ajax/utilisateur/${prenom}/${nom}`, headerGetJson())
      .then(response => response.json())
      .then(function(utilisateur) {
        dispatch(stopWaiting());
        dispatch(utilisateurLoaded(utilisateur));
      });
  };
};

export const utilisateurLoaded = utilisateur => ({
  type: UTILISATEUR_LOADED,
  utilisateur
});

export const getProduit = id => {
  return (dispatch, getState) => {
    dispatch(startWaiting());
    fetch(`/sandbox-react/ajax/produit/${id}`, headerGetJson())
      .then(response => response.json())
      .then(function(produit) {
        dispatch(stopWaiting());
        dispatch(produitLoaded(produit));
      });
  };
};

export const produitLoaded = produit => ({
  type: PRODUIT_LOADED,
  produit
});
