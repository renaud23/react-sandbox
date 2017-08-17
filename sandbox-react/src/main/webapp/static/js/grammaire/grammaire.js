import React, { Component, Children } from "react";

export const Titre = ({ html }) =>
  <h2 className="titre" dangerouslySetInnerHTML={{ __html: html }} />;

export const SousTitre = ({ html }) =>
  <h3 className="sous-titre" dangerouslySetInnerHTML={{ __html: html }} />;

export const Information = ({ content }) =>
  <main className="main" role="main">
    {content}
  </main>;

export const BlankComponent = ({ content }) =>
  <span>
    {content}
  </span>;

export const Blocs = ({ content }) =>
  <div className="blocs">
    {content}
  </div>;

export const Bloc = ({ content }) =>
  <div className="bloc">
    {content}
  </div>;

export const Paragraphes = ({ content }) =>
  <div className="bloc paragraphes">
    {content}
  </div>;

export const Paragraphe = ({ html }) =>
  <p className="paragraphe" dangerouslySetInnerHTML={{ __html: html }} />;
