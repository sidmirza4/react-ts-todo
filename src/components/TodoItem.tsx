import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todo: Todo; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <li
      className={classes.item}
      onClick={() => props.removeTodo(props.todo.id)}
    >
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
