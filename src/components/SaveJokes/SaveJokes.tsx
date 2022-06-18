import React from "react";
import "./SaveJokes.scss";

const SaveJokes = () => {
  return (
    <div className="SaveJokes">
      <div>
        <button>-</button>
        <input type="number" value="0" className="SaveJokes-input" />
        <button>+</button>
      </div>
      <button>Save Jokes</button>
    </div>
  );
};

export default SaveJokes;
