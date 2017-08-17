package fr.insee.sandboxReact.model.xmlFack;


public class GrammBuilder {
	
	private GrammComponent component;
	
	public static GrammBuilder newComposite(){
		GrammBuilder b = new GrammBuilder();
		b.component = new GrammComposite();
		return b;
	}
	
	public static GrammBuilder newLeaf(){
		GrammBuilder b = new GrammBuilder();
		b.component = new GrammLeaf();
		return b;
	}
	
	public GrammBuilder append(GrammComponent gramm){
		if(component instanceof GrammComposite){
			GrammComposite gc = (GrammComposite) component;
			gc.append(gramm);
			return this;
		} else {			
			throw new UnsupportedOperationException();
		}
	}
	
	public GrammBuilder setName(String name){
		if(component instanceof GrammComposite){
			GrammComposite composite = (GrammComposite) component;
			composite.setName(name);
		} else if(component instanceof GrammLeaf){
			GrammLeaf leaf = (GrammLeaf) component;
			leaf.setName(name);
		}
		
		return this;
	}
	
	public GrammBuilder setHtml(String html){
		if(component instanceof GrammComposite){
			GrammComposite composite = (GrammComposite) component;
			composite.setHtml(html);
		} else if(component instanceof GrammLeaf){
			GrammLeaf leaf = (GrammLeaf) component;
			leaf.setHtml(html);
		}
		
		return this;
	}
	
	public GrammComponent build(){
		return component;
	}
}
