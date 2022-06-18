import React from "react";
import "./Display.scss";
const Display = () => {
  return (
    <div className="Display">
      <img className="Display__image" src="./chuck.jpeg" alt="Chuck Noris" />
      <p className="Display__joke">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        distinctio ad temporibus nisi accusamus animi architecto incidunt
        adipisci sint! .
      </p>
    </div>
  );
};

export default Display;
