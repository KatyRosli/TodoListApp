const addTask = (tasks, title, description) => {
    const newTask = { id: `todo-${parseInt(Date.now() * Math.random()).toString()}`, title: title , description: description, completed: false };
    return [...tasks, newTask];
  }
  
  const updateTask = (tasks, id) => {
    return tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
  }
  
  const removeTask = (tasks, id) => {
    return tasks.filter((task) => id !== task.id);
  }
  
  export { addTask, removeTask, updateTask };
  