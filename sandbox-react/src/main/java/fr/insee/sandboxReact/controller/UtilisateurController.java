package fr.insee.sandboxReact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.insee.sandboxReact.model.Utilisateur;

@Controller
@RequestMapping(path = "/ajax/utilisateur")
public class UtilisateurController {
	
	@RequestMapping(path = "/{nom}/{prenom}", method = RequestMethod.GET) 
	@ResponseBody
	public Utilisateur getUtilisateur() {
		return Utilisateur.Builder
			.newInstance()
			.setPrenom("renaud")
			.setNom("genevois")
			.build();
	}

}
