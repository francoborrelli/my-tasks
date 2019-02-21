import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { editToDo, removeToDo } from "../../store/actions";
import { connect } from "react-redux";

import { Icon, Input, Form } from "antd";
import { validateText } from "../../utils/validator";
import Card from "../card/card";

const Item = Form.Item;

class ToDo extends Component {
  state = {
    edit: false,
    valid: true
  };

  edit = e => {
    const text = e.target.value;
    if (this.state.valid) {
      this.setState({ edit: false });
      this.props.editToDo({
        new: text,
        old: this.props.todo
      });
    }
  };

  validate = text => {
    this.setState({ valid: validateText(text) });
  };

  delete = () => {
    this.props.removeToDo(this.props.todo);
  };

  toddleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  };

  render = () => {
    const actions = [
      <Icon onClick={this.toddleEdit} type="edit" />,
      <Icon onClick={this.delete} type="delete" />
    ];

    const editActions = [<Icon onClick={this.toddleEdit} type="close" />];

    return (
      <Card actions={this.state.edit ? editActions : actions}>
        {this.state.edit ? (
          <Item
            style={{ marginBottom: 0 }}
            validateStatus={this.state.valid ? "" : "error"}
          >
            <Input
              placeholder="Ingrese una breve descripción"
              defaultValue={this.props.todo.text}
              onChange={e => this.validate(e.target.value)}
              onPressEnter={this.edit}
            />
          </Item>
        ) : (
          this.props.todo.text
        )}
      </Card>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ editToDo, removeToDo }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(ToDo);
