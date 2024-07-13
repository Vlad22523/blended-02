import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((item, index) => (
        <TodoListItem key={item.id} text={item.text} index={index} />
      ))}
    </Grid>
  );
};
