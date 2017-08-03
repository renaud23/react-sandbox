import {startWaiting,stopWaiting} from './layout-actions';

export const UTILISATEUR_LOADED = '__UTILISATEUR_LOADED__';

const headerGetJson = () => {
    const method = 'GET';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return ({ method, headers });
}

export const getUtilisateur = (prenom, nom) => {

    return (dispatch, getState) => {
        dispatch(startWaiting());
        fetch(`/sandbox-react/ajax/utilisateur/${prenom}/${nom}`, headerGetJson())
            .then(response => response.json())
            .then(function (utilisateur) {
                dispatch(stopWaiting());
                dispatch(utilisateurLoaded(utilisateur));
            });
    }
}

export const utilisateurLoaded = utilisateur => ({ type: UTILISATEUR_LOADED, utilisateur });