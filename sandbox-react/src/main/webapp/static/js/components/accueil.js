import React from "react";
import PropTypes from "prop-types";

const Accueil = ({ username }) => <h1>Hello {username} !</h1>;

Accueil.propTypes = {
    username: PropTypes.string.isRequired
};

export default Accueil;
