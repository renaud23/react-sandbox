package fr.insee.sandboxReact.model;

import java.io.Serializable;

public class Layout implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6332760950837192220L;
	
	private String utilisateur;

	public String getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(String utilisateur) {
		this.utilisateur = utilisateur;
	}
}
