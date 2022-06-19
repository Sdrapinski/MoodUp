import axios from "axios";
import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import Form from "../Form/Form";
import SaveJokes from "../SaveJokes/SaveJokes";

import { SelectChangeEvent } from "@mui/material/Select";
import {
  ResponseJokeResult,
  Categories,
  ResponseCategoriesResult,
} from "../../interfaces/MainScreenInterface";

const MainScreen = () => {
  const [Joke, setJoke] = useState("");
  const [Categories, setCategories] = useState<Categories>();
  const [Name, setName] = useState<string>("");
  const [Category, setCategory] = useState("");

  const url = `http://api.icndb.com/jokes/random`;

  const HandleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const HandleSlelectChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 0 || 0
    let url2 = url;
    if (Category.length !== 0 && Name.length === 0) {
      url2 = `${url}?limitTo=[${Category}]`;
    }
    if (Category.length === 0 && Name.length !== 0) {
      const NameArray: string[] = Name.split(" ");
      if (NameArray.length > 1) {
        url2 = `${url}?firstName=${NameArray[0]}&lastName=${NameArray[1]}`;
      } else {
        url2 = `${url}?firstName=${NameArray[0]}&lastName=`;
      }
    }
    if (Category.length !== 0 && Name.length !== 0) {
      const NameArray: string[] = Name.split(" ");

      if (NameArray.length > 1) {
        url2 = `${url}?firstName=${NameArray[0]}&limitTo=[${Category}]&lastName=${NameArray[1]}`;
      } else {
        url2 = `${url}?firstName=${NameArray[0]}&limitTo=[${Category}]&lastName=`;
      }
    }
    axios
      .get(url2)
      .then((response) => {
        const data = response.data.value.joke;
        setJoke(data);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    axios
      .get<ResponseJokeResult>(url)
      .then((response) => {
        const data = response.data.value.joke;
        setJoke(data);
      })
      .catch((err) => console.warn(err));

    axios
      .get<ResponseCategoriesResult>("http://api.icndb.com/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => console.warn(err));

    return () => {};
  }, []);

  return (
    <div className="MainScreen Flex__Container">
      <Display name={Name} joke={Joke || "Error"} />
      <Form
        categories={Categories || { value: ["Error"] }}
        category={Category}
        HandleTextChange={HandleTextChange}
        name={Name}
        HandleSubmit={HandleSubmit}
        HandleSelect={HandleSlelectChange}
      />
      <SaveJokes />
    </div>
  );
};

export default MainScreen;
