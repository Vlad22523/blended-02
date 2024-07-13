import { Form, Text } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const handleSubmit = value => {
    setTodos(prev => [...prev, { text: value, id: nanoid() }]);
  };

  console.log(todos);
  return (
    <>
      <Text textAlign="center">There are no any todos ...</Text>
      <Form onSubmit={handleSubmit} />
    </>
  );
};
