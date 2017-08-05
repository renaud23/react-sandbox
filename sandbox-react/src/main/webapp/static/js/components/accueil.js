import React, { Component } from "react";
import PropTypes from "prop-types";

class Accueil extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //
    this.props.getUtilisateur("renaud", "genevois");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  render() {
    const { nom, prenom } = this.props;
    return (
      <h1>
        Hello <span>{prenom}</span> <span>{nom}</span> !
      </h1>
    );
  }
}

Accueil.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired
};

export default Accueil;
