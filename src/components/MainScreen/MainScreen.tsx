import React from "react";
import Display from "../Display/Display";
import Form from "../Form/Form";
import SaveJokes from "../SaveJokes/SaveJokes";
import "./MainScreen.scss";
const MainScreen = () => {
  return (
    <div className="MainScreen Flex__Container">
      <Display />
      <Form />
      <SaveJokes />
    </div>
  );
};

export default MainScreen;
