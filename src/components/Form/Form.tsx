import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <form className="Form Flex__Container">
      <select className="From__select" placeholder="Categories" name="" id="">
        <option value="text">text</option>
      </select>
      <input
        className="Form__input-Text"
        type="text"
        placeholder="Impersonate Chuck Norris"
      />
      <button className="Form__Button-Submit" type="submit">
        Draw a random Chuck Norris joke
      </button>
    </form>
  );
};

export default Form;
