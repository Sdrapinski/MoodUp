import React from "react";
import "./Display.scss";
import { ChuckNorrisJoke } from "../../interfaces/MainScreenInterface";

interface DisplayProps {
  joke: ChuckNorrisJoke;
}

const Display: React.FC<DisplayProps> = (props) => {
  return (
    <div className="Display">
      <img className="Display__image" src="./chuck.jpeg" alt="Chuck Noris" />
      <p className="Display__joke">{props.joke.joke}</p>
    </div>
  );
};

export default Display;
