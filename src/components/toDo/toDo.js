import React, { useState } from "react";

import DisplayCard from "./displayCard/displayCard";
import EditCard from "./editCard/editCard";

import "./toDo.css";

export default ({ todo }) => {
  const [edit, setEdit] = useState(false);

  const toddle = () => {
    setEdit(!edit);
  };

  const Component = edit ? EditCard : DisplayCard;

  return <Component toddleEdit={toddle} todo={todo} />;
};
