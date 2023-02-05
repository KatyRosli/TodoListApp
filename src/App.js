import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CreateTodoForm from './components/CreateTodoForm';
import TodoList from './components/TodoList';
import { addTask, removeTask, updateTask } from './taskHelper';
import Footer from './components/Footer';
import './App.css';

const App = props => {
  let [tasks, setTasks] = useState(props.tasks);

  useEffect(() => {
    if (!tasks || tasks.length > 0) {
      localStorage.setItem('todos', JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    let localTasks = JSON.parse(localStorage.getItem('todos'));
    if (localTasks && localTasks.length > 0) {
      setTasks(localTasks);
    }
  }, []);

  const createTask = (title, description) => {
    setTasks(addTask(tasks, title, description));
  }

  const toggleTaskCompleted = id => {
    setTasks(updateTask(tasks, id));
  }

  const deleteTask = id => {
    if (tasks.length === 1) {
      localStorage.clear();
    }
    setTasks(removeTask(tasks, id));
  }

  return (
    <main>
      <Header />
      <CreateTodoForm createTask={createTask}/>
      <TodoList 
        tasks={tasks}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask} />
      <Footer />
    </main>
  );
}

export default App;
