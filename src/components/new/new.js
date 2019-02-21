import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "../../store/actions";
import { validateText } from "../../utils/validator";

import Card from "../card/card";
import { Input, Button } from "antd";

const New = ({ addToDo }) => {
  const [text, setText] = useState("");

  return (
    <Card>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <Button
        style={{ marginTop: 10 }}
        disabled={!validateText(text)}
        onClick={() => addToDo(text)}
      >
        Guardar
      </Button>
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
