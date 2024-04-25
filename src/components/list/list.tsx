import ToDo from '../toDo/toDo';
import { DragDropContext, Droppable, Draggable, OnDragEndResponder } from 'react-beautiful-dnd';

// Redux
import { useAppDispatch, useAppSelector } from '../../store/store';
import { reorderToDos } from '../../store/slices/toDoList';

export const List = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.toDoList.list);

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return;
    }
    dispatch(
      reorderToDos({
        source: result.source.index,
        destination: result.destination.index,
      })
    );
  };

  if (!todos.length) {
    return null;
  }

  return (
    <div style={{ marginTop: 30, marginBottom: 20 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable' isDropDisabled={todos.length === 1}>
          {(provided) => (
            <div ref={provided.innerRef}>
              {todos.map((todo, i) => (
                <Draggable
                  key={i}
                  index={i}
                  draggableId={todo.id.toString()}
                  isDragDisabled={todos.length === 1}
                >
                  {(provided) => (
                    <div style={{ marginBottom: 15 }}>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ToDo toDo={todo} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
