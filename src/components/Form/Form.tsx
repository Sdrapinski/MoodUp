import React from "react";
import { Categories } from "../../interfaces/MainScreenInterface";
import "./Form.scss";

interface FormProps {
  category: Categories;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <form className="Form Flex__Container">
      <select className="From__select" placeholder="Categories" name="" id="">
        {props.category.value.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
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
