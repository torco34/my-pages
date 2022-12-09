import React from "react";
import { TextHome } from "../assets/styled/TextTecno";
export const TextTecno = () => {
  return (
    <>
      <TextHome>
        <h2>I AM A FRONT-END WEB DEVELOPER</h2>
        <p>
          I build and code graphic interfaces, web pages and applications. I'm
          autodidactic.
        </p>
        &nbsp;
        <h2>my skills are</h2>
        <h5>HTML5, CSS3, JavaScript, Bootstrap, Git, GitHub y React.js</h5>
        <h5>I currently study English</h5>
        <div className=" containerA-botones">
          <a href="view/cvori.pdf" className="btn btn-dark">
            CV
          </a>
          <a href="view/spanish.html" className="btn btn-dark">
            Spanish
          </a>
        </div>
      </TextHome>
    </>
  );
};
