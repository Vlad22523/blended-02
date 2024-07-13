import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, handleDeleteTodos }) => {
  return (
    <Grid>
      {todos.map((item, index) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          text={item.text}
          index={index}
          handleDeleteTodos={handleDeleteTodos}
        />
      ))}
    </Grid>
  );
};
