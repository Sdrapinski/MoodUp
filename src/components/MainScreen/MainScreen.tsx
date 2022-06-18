import axios from "axios";
import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import Form from "../Form/Form";
import SaveJokes from "../SaveJokes/SaveJokes";
import "./MainScreen.scss";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  ResponseJokeResult,
  ChuckNorrisJoke,
  Categories,
  ResponseCategoriesResult,
} from "../../interfaces/MainScreenInterface";

const MainScreen = () => {
  const [Joke, setJoke] = useState<ChuckNorrisJoke>();
  const [Categories, setCategories] = useState<Categories>();
  const [Name, setName] = useState<string>("");
  const [Category, setCategory] = useState("");

  const HandleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const HandleSlelectChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Name.length === 0 && Category.length === 0) {
      axios
        .get("http://api.icndb.com/jokes/random")
        .then((response) => {
          const data = response.data.value;
          console.log(data);
          setJoke(data);
        })
        .catch((err) => console.warn(err));
    }
    if (Category.length !== 0 && Name.length === 0) {
      axios
        .get(`http://api.icndb.com/jokes/random?limitTo=[${Category}]`)
        .then((response) => {
          const data = response.data.value;
          setJoke(data);
        })
        .catch((err) => console.warn(err));
    }
    if (Category.length === 0 && Name.length !== 0) {
      const NameArray: string[] = Name.split(" ");
      let url;
      if (NameArray.length > 1) {
        url = `http://api.icndb.com/jokes/random?firstName=${NameArray[0]}&lastName=${NameArray[1]}`;
      } else {
        url = `http://api.icndb.com/jokes/random?firstName=${NameArray[0]}&lastName=`;
      }
      axios
        .get(url)
        .then((response) => {
          const data = response.data.value;
          setJoke(data);
        })
        .catch((err) => console.warn(err));
    } else {
      const NameArray: string[] = Name.split(" ");
      let url;
      if (NameArray.length > 1) {
        url = `http://api.icndb.com/jokes/random?firstName=${NameArray[0]}&limitTo=[${Category}]&lastName=${NameArray[1]}`;
      } else {
        url = `http://api.icndb.com/jokes/random?firstName=${NameArray[0]}&limitTo=[${Category}]&lastName=`;
      }
      axios
        .get(url)
        .then((response) => {
          const data = response.data.value;
          setJoke(data);
        })
        .catch((err) => console.warn(err));
    }
  };

  useEffect(() => {
    axios
      .get<ResponseJokeResult>("http://api.icndb.com/jokes/random")
      .then((response) => {
        const data = response.data.value;
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
      <Display joke={Joke || { id: 0, categories: [], joke: "Error" }} />
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
