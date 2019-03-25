import React from "react";
import "./style.css";

export function Subtitle(props) {
  return <h2 className="subtitle">{props.children}</h2>;
}

export function SubtitleH4(props) {
  return <h4 className="subtitleH4">{props.children}</h4>;
}
