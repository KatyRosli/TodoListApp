import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TodoList from './TodoList';

const toggleTaskCompletedMocked = () => {};
const deleteTaskMocked = () => {};

describe('show correct order for TodoList', () => {
  it('should put completed at the bottom of the list', () => {
    render(
      <TodoList
        tasks={[
          { id: 'todo-1', title: 'one', description: '', completed: true }, 
          { id: 'todo-2', title: 'two', description : '', completed: false }]}
        toggleTaskCompleted={toggleTaskCompletedMocked}
        deleteTask={deleteTaskMocked} />
    );
    const liTodos = screen.getAllByTestId(/liTodo.*/i);
    expect(liTodos[0]).toHaveClass('todo');
    expect(liTodos[1]).toHaveClass('todo--completed');
  });
  it('should restore order when toggle back', async () => {
    render(
      <TodoList
        tasks={[
          { id: 'todo-1', title: 'one', description: '', completed: true }, 
          { id: 'todo-2', title: 'two', description : '', completed: false }]}
        toggleTaskCompleted={toggleTaskCompletedMocked}
        deleteTask={deleteTaskMocked} />
    );
    fireEvent.click(screen.getByTestId('todo-1'), {
      target: {checked: true}
    });
    await waitFor(() => {
      const liTodos = screen.getAllByTestId(/liTodo.*/i);
      expect(liTodos[1]).not.toBeChecked();
    });
  });
});
