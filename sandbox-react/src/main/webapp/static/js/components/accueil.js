import React, { Component } from "react";
import PropTypes from "prop-types";

class Accueil extends Component {

    componentWillMount(nextProps) {
        this.props.getUtilisateur('renaud', 'genevois');
    }

    render() {
        const { nom, prenom } = this.props;
        return (<h1>Hello <span>{prenom}</span> <span>{nom}</span> !</h1>);
    }

}

Accueil.propTypes = {
    prenom: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired
};

export default Accueil;
