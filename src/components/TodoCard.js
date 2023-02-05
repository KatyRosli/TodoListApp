import React from 'react';

const TodoCard = props => {
  let liClassSuffix = '';
  if (props.completed) {
    liClassSuffix = '--completed';
  }
  return (
    <li className={`todo${liClassSuffix}`} data-testid={`liTodo-${props.id}`}>
      <input id={props.id} data-testid={props.id} className='todo--toggle-completed' type='checkbox' defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)} />
      <label className='todo__title' htmlFor={props.id}> {props.title} </label>
      <label className='todo__description' htmlFor={props.id}> {props.description} </label>
      {(props.completed && <button type='button' data-testid='btnRemoveTodo' className='todo__button--remove' onClick={() => props.deleteTask(props.id)}>Delete</button>)}
    </li>
  );
}

export default TodoCard;
