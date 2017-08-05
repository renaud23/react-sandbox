package fr.insee.sandboxReact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.insee.sandboxReact.model.Layout;

@Controller
@RequestMapping(path = "/ajax/layout")
public class LayoutController {
	
	@RequestMapping(path = "", method = RequestMethod.GET) 
	@ResponseBody
	public Layout getLayout() {
		return new Layout();
	}

}
