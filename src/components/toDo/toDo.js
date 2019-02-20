import React from "react";

import { Card, Icon } from "antd";
import { bindActionCreators } from "redux";
import { editToDo, removeToDo } from "../../store/actions";
import { connect } from "react-redux";

const toDo = ({ todo, removeToDo, editToDo }) => (
  <Card
    style={{ margin: 10, minWidth: 300 }}
    actions={[
      <Icon onClick={() => editToDo(todo)} type="edit" />,
      <Icon onClick={() => removeToDo(todo)} type="delete" />
    ]}
  >
    {todo.text}
  </Card>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ editToDo, removeToDo }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(toDo);
