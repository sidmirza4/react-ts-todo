import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const todo = new Todo(text);
    setTodos((prev) => prev.concat(todo));
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
