package fr.insee.sandboxReact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.insee.sandboxReact.model.xmlFack.GrammBuilder;
import fr.insee.sandboxReact.model.xmlFack.GrammComponent;

@Controller
@RequestMapping(path = "/ajax/produit")
public class XmlFackController {
	
	@RequestMapping(path = "/{id}", method = RequestMethod.GET) 
	@ResponseBody
	public GrammComponent getXml() {
		// speudo objet sensé représenté un xml en grammaire métier.
		return GrammBuilder.newComposite()
			.setName("information")
			.append(GrammBuilder.newLeaf()
				.setName("titre")
				.setHtml("<strong>le titre</strong>")
				.build())
			.append(GrammBuilder.newLeaf()
				.setName("sous-titre")
				.setHtml("<i>le sous titre</i>")
				.build())
			.append(GrammBuilder.newComposite()
				.setName("blocs")
				.append(GrammBuilder.newComposite()
					.setName("bloc")					
					.append(GrammBuilder.newComposite()
						.setName("paragraphes")
						.append(GrammBuilder.newLeaf()
							.setName("paragraphe")
							.setHtml("<div>un paragraphe de texte.</div>")
							.build())
						.build())
					.append(GrammBuilder.newComposite()
						.setName("paragraphes")
						.append(GrammBuilder.newLeaf()
							.setName("paragraphe")
							.setHtml("<div>un second paragraphe de texte.</div>")
							.build())
						.build())
					.build())					
				.build())
			.build();
	}
}
