import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const data = JSON.parse(localStorage.getItem('todos'));
    return data ?? [];
  });
  const handleSubmit = value => {
    setTodos(prev => [...prev, { text: value, id: nanoid() }]);
  };
  const handleDeleteTodos = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };
  console.log(todos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <Form onSubmit={handleSubmit} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} />
    </>
  );
};
