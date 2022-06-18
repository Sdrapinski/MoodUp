import React, { useRef, useState } from "react";
import { Categories } from "../../interfaces/MainScreenInterface";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./Form.scss";

interface FormProps {
  categories: Categories;
  category: string;
  name: string;
  HandleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  HandleSubmit: (e: React.FormEvent) => void;
  HandleSelect: (event: SelectChangeEvent) => void;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <FormControl className="Form">
      <div>
        <InputLabel id="SelectLabel">Categories</InputLabel>
        <Select
          id="demo-simple-select-helper"
          labelId="SelectLabel"
          label="Categories"
          onChange={props.HandleSelect}
          className="Form__select"
          value={props.category}
        >
          <MenuItem value="">
            <em>Select Category</em>
          </MenuItem>
          {props.categories.value.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </div>

      <TextField
        id="outlined-basic"
        variant="outlined"
        className="Form__input-Text"
        type="text"
        label="Impersonate Chuck Norris"
        value={props.name}
        onChange={props.HandleTextChange}
      />
      <button
        className="Form__Button-Submit"
        onClick={props.HandleSubmit}
        type="submit"
      >
        {props.name.length > 0
          ? `Draw a random ${props.name} Joke`
          : "Draw a random Chuck Norris Joke"}
      </button>
    </FormControl>
  );
};

export default Form;
