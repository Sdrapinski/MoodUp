import axios from "axios";
import React, { useEffect, useState } from "react";

interface DisplayProps {
  joke: string;
  name: string;
}

const Display: React.FC<DisplayProps> = (props) => {
  return (
    <div className="Display">
      <img
        className="Display__image"
        src={props.name === "" ? "./chuck.jpeg" : "./unknownPerson.jpg"}
        alt="Chuck Noris"
      />
      <p className="Display__joke">{props.joke}</p>
    </div>
  );
};

export default Display;
