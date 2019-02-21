import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "../../store/actions";
import { validateText } from "../../utils/validator";

import Card from "../card/card";
import Input from "../input/input";

const New = ({ addToDo }) => {
  const [text, setText] = useState("");

  const onPress = () => {
    if (validateText(text)) {
      addToDo(text);
      setText("");
    }
  };

  return (
    <Card title="To Do List">
      <Input
        value={text}
        onPressEnter={onPress}
        onChange={e => setText(e.target.value)}
      />
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToDo }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(New);
