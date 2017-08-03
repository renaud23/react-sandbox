package fr.insee.sandboxReact.model;

import java.io.Serializable;

public class Utilisateur implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7606338820350614186L;
	
	private String nom;
	private String prenom;
	
	private Utilisateur() {
		
	}
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	
	
	public static class Builder {
		private Utilisateur u;
		
		public static Builder newInstance() {
			Builder b = new Builder();
			b.u = new Utilisateur();
			return b;
		}
		
		public Builder setNom(String nom) {
			u.nom = nom;
			return this;
		}
		
		public Builder setPrenom(String prenom) {
			u.prenom = prenom;
			return this;
		}
		
		public Utilisateur build() {
			return u;
		}
	}

}
