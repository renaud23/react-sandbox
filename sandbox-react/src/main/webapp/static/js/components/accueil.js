import React, { Component } from "react";
import PropTypes from "prop-types";
import { transform } from "./../grammaire/transformation";

class Accueil extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUtilisateur("renaud", "genevois");
    this.props.getProduit("1234");
  }

  componentWillReceiveProps(nextProps) {}

  componentWillUpdate() {}

  render() {
    const { nom, prenom, produit } = this.props;
    const transfo = produit !== null ? transform(produit) : null;

    return (
      <div>
        <h1>
          Hello <span>{prenom}</span> <span>{nom}</span> !
        </h1>
        {transfo}
      </div>
    );
  }
}

Accueil.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired
};

export default Accueil;
