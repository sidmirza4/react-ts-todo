import React, { useRef, useContext } from 'react';

import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHander = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
    textRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHander} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input ref={textRef} type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
