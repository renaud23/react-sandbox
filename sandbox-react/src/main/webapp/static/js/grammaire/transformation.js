import React, { Component } from "react";
import {
  Information,
  BlankComponent,
  Titre,
  SousTitre,
  Blocs,
  Bloc,
  Paragraphes,
  Paragraphe
} from "./grammaire";

const INFORMATION = "information";
const TITRE = "titre";
const SOUS_TITRE = "sous-titre";
const BLOCS = "blocs";
const BLOC = "bloc";
const PARAGRAPHES = "paragraphes";
const PARAGRAPHE = "paragraphe";

export const transform = (produit, index) => {
  if (produit.content) {
    const children = produit.content.map((c, index) => transform(c, index));
    return getComposite(produit, children, index);
  } else {
    return getSingle(produit, index);
  }
};

const getComposite = (tag, children, index) => {
  switch (tag.name) {
    case INFORMATION:
      return <Information content={children} key={index} />;
    case BLOCS:
      return <Blocs content={children} key={index} />;
    case BLOC:
      return <Bloc content={children} key={index} />;
    case PARAGRAPHES:
      return <Paragraphes content={children} key={index} />;
    default: {
      return <BlankComponent content={children} key={index} />;
    }
  }
};

const getSingle = (tag, index) => {
  const { name, html } = tag;
  switch (name) {
    case TITRE:
      return <Titre html={html} key={index} />;
    case SOUS_TITRE:
      return <SousTitre html={html} key={index} />;
    case PARAGRAPHE:
      return <Paragraphe html={html} key={index} />;
    default: {
      return null;
    }
  }
};
