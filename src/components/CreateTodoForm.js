import React, { useState } from 'react';

const CreateTodoForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [emptyTitle, setEmptyTitle] = useState(true);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  
  const handleTitleChange = e => {
    if (e.target.value.length === 0) {
      setEmptyTitle(true);
    } else {
      setEmptyTitle(false);
    } 
    setTitle(e.target.value);
  }

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!emptyTitle) {
      props.createTask(title, description);
      setEmptyTitle(true);
      setShowErrorMsg(false);
      setTitle('');
      setDescription('');
    } else {
      setShowErrorMsg(true);
    }
  }

  return (
    <form className='createToDoForm' onSubmit={handleSubmit}>
      {showErrorMsg && <h3>Please enter a title and a description to create a new task.</h3>}
      <label className='createToDoForm__title'>Title:</label><br/>
      <input type='text' id='txtTodoItemToAdd' data-testid='txtTodoItemToAdd' className='createToDoForm__title-input' name='title' autoComplete='off' value={title} onChange={handleTitleChange} /><br/>
      <label className='createToDoForm__title'>Description:</label><br/>
      <input type='text' id='txtTodoItemDescription' data-testid='txtTodoItemDescription' className='createToDoForm__description-input' name='description' autoComplete='off' value={description} onChange={handleDescriptionChange} /><br/>
      <button type='sumbit' className='createToDo__submit' id='btnAddTodo' data-testid='btnAddTodo'>Create Task</button>
    </form>
  );
}

export default CreateTodoForm;
