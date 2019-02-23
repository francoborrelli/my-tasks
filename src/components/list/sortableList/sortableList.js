import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { reorder } from "../../../store/actions";

import ToDo from "../../toDo/toDo";

const List = ({ todos, reorder }) => {
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    reorder({
      source: result.source.index,
      destination: result.destination.index
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" isDropDisabled={todos.length === 1}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            {todos.map((todo, i) => (
              <Draggable
                key={i}
                draggableId={todo.date}
                index={i}
                isDragDisabled={todos.length === 1}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ToDo todo={todo} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ reorder }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(List);
