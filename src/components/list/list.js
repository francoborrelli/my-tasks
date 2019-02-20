import React, { Component } from "react";
import { connect } from "react-redux";

import ToDo from "../toDo/toDo";
import "./list.css";

const List = ({ todos }) => {
  return (
    <div className="todo-container">
      {todos.map((todo, i) => (
        <ToDo key={`todo${i}`} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(List);
