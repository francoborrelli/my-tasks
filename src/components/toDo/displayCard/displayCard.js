import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { removeToDo } from "../../../store/actions";

import { Icon } from "antd";
import Card from "../../card/card";

import "./displayCard.css";

const DisplayCard = ({ removeToDo, todo, toddleEdit }) => {
  const remove = () => removeToDo(todo);
  const actions = [
    <Icon onClick={toddleEdit} type="edit" className="edit-icon" />,
    <Icon onClick={remove} type="delete" className="delete-icon" />
  ];

  return (
    <Card actions={actions} bodyStyle={{ textAlign: "left" }}>
      <span className="text-section">{todo.text}</span>
    </Card>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeToDo }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(DisplayCard);
