import React from "react";
import { connect } from "react-redux";

import SortableList from "./sortableList/sortableList";
import NoResult from "./noResult";

import "./list.css";

const List = ({ todos }) => (
  <div className="todo-container">
    {todos.length ? <SortableList todos={todos} /> : <NoResult />}
  </div>
);

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(List);
