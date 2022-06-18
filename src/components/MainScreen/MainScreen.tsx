import axios from "axios";
import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import Form from "../Form/Form";
import SaveJokes from "../SaveJokes/SaveJokes";
import "./MainScreen.scss";
import {
  ResponseJokeResult,
  ChuckNorrisJoke,
  Categories,
  ResponseCategoriesResult,
} from "../../interfaces/MainScreenInterface";

const MainScreen = () => {
  const [Joke, setJoke] = useState<ChuckNorrisJoke>();
  const [Categories, setCategories] = useState<Categories>();
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
      <Form category={Categories || { value: ["Error"] }} />
      <SaveJokes />
    </div>
  );
};

export default MainScreen;
