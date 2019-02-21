import React from "react";
import { connect } from "react-redux";

import ToDo from "../toDo/ToDo";
import NoResult from "./noResult";

import "./list.css";

const List = ({ todos }) => {
  return (
    <div className="todo-container">
      {todos.length ? (
        todos.map((todo, i) => <ToDo key={`todo${i}`} todo={todo} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(List);
