import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { editToDo } from "../../../store/actions";
import { connect } from "react-redux";

import { Icon, Form } from "antd";
import { validateText } from "../../../utils/validator";
import Card from "../../card/card";
import Input from "../../input/input";

import "./editCard.css";

const Item = Form.Item;

const EditCard = ({ toddleEdit, editToDo, todo }) => {
  const [text, setText] = useState(todo.text);

  const edit = () => {
    if (validateText(text)) {
      toddleEdit();
      editToDo({
        new: text,
        old: todo
      });
    }
  };

  const editActions = [
    <Icon onClick={toddleEdit} type="close" className="close-icon" />
  ];

  return (
    <Card actions={editActions}>
      <Item
        style={{ marginBottom: 0 }}
        validateStatus={validateText(text) ? "" : "error"}
      >
        <Input
          defaultValue={text}
          onPressEnter={edit}
          onChange={e => setText(e.target.value)}
        />
      </Item>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ editToDo }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(EditCard);
