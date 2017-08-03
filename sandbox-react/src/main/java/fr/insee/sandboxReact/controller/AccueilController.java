package fr.insee.sandboxReact.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AccueilController {
	private final Logger logger = LoggerFactory.getLogger(AccueilController.class);
	
	public AccueilController() {}
	
	
	@RequestMapping(path="/accueil",method = RequestMethod.GET)
	public String accueil() {
		logger.info("Index start");
		return "accueil";
	}

}
