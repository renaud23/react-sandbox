package fr.insee.sandboxReact.model.xmlFack;

import java.io.Serializable;

public class GrammLeaf implements GrammComponent, Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 7930871786330552810L;
	
	private String name;
	private String html;

	@Override
	public String getHtml() {
		return html;
	}

	public void setHtml(String html) {
		this.html = html;
	}


	@Override
	public String getName() {
		return this.name;
	}

	
	public void setName(String name) {
		this.name = name;
	}

}
