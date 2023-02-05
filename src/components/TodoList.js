import React, { useRef, useEffect } from 'react';
import TodoCard from './TodoCard';

const usePrevious = value => {
  const ref = useRef();
    useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TodoList = props => {
  const renderTodoCards = tasks => {
    return tasks.map(task => (
      <TodoCard
        id={task.id}
        title={task.title}
        description={task.description}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={props.toggleTaskCompleted}
        deleteTask={props.deleteTask}
      />
    ));
  }

  const taskListNotCompleted = renderTodoCards(props.tasks.filter(task => !task.completed));
  const taskListCompleted = renderTodoCards(props.tasks.filter(task => task.completed));

  let tasksNoun = 'task';
  if (taskListNotCompleted.length !== 1) {
    tasksNoun = 'tasks';
  }
  const headingTodoText = `${taskListNotCompleted.length} Todo ${tasksNoun}`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(props.tasks.length);

  useEffect(() => {
    if (props.tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [props.tasks.length, prevTaskLength]);

  return (
    <section>
      <h2 tabIndex='-1' ref={listHeadingRef}>{headingTodoText}</h2>
      <ol id='todoList' data-testid='todoList' className='todoList'>
        {taskListNotCompleted}
        {taskListCompleted}
      </ol>
    </section>
  );
}

export default TodoList;
