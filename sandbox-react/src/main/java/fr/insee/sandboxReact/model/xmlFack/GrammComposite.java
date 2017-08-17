package fr.insee.sandboxReact.model.xmlFack;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


public class GrammComposite implements GrammComponent, Serializable, Iterable<GrammComponent>{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1827616933439054185L;	
	
	private String name;
	private String html;
	
	private List<GrammComponent> content = new ArrayList<>();
	
	public boolean isEmpty(){
		return content.isEmpty();
	}
	
	public GrammComposite append(GrammComponent gramm){
		this.content.add(gramm);
		return this;
	}

	@Override
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public List<GrammComponent> getContent() {
		return content;
	}
	
	public void setContent(List<GrammComponent> content) {
		this.content = content;
	}

	@Override
	public Iterator<GrammComponent> iterator() {
		return content.iterator();
	}

	@Override
	public String getHtml() {
		return html;
	}
	
	public void setHtml(String html) {
		this.html = html;
	}

}
