package fr.insee.sandboxReact;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
	private final Logger logger = LoggerFactory.getLogger(IndexController.class);
	
	public IndexController() {}
	
	
	@RequestMapping(name="/accueil",method = RequestMethod.GET)
	public String index() {
		logger.info("Index start");
		return "accueil";
	}

}
