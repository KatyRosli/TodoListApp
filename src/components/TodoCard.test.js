import { render, screen } from '@testing-library/react';
import TodoCard from './Todocard';

const toggleTaskCompletedMocked = () => {}
const deleteTaskMocked = () => {}

test('show completed todoCard', () => {
  render(<TodoCard
    id='todo-1'
        title='Buy Milk'
        description='2 cartons of milk'
        completed={true}
        key='todo-1'
        toggleTaskCompleted={toggleTaskCompletedMocked}
        deleteTask={deleteTaskMocked}
  />);
  const liElement = screen.getByTestId('liTodo-todo-1');
  const removeButton = screen.getByTestId('btnRemoveTodo');
  expect(liElement).toBeInTheDocument();
  expect(removeButton).toBeInTheDocument();
  expect(liElement).toHaveClass('todo--completed');
});

test('show not completed todoCard', () => {
  render(<TodoCard
    id='todo-1'
        title='Buy Milk'
        description='2 cartons of milk'
        completed={false}
        key='todo-1'
        toggleTaskCompleted={toggleTaskCompletedMocked}
        deleteTask={deleteTaskMocked}
  />);
  const liElement = screen.getByTestId('liTodo-todo-1');
  expect(liElement).toBeInTheDocument();
  expect(liElement).toHaveClass('todo');
  
  const removeButton = screen.queryByTestId('btnRemoveTodo');
  expect(removeButton).not.toBeInTheDocument();
});

test('show remove button when task is completed', () => {
  render(<TodoCard
    id='todo-1'
        title='Buy Milk'
        description='2 cartons of milk'
        completed={true}
        key='todo-1'
        toggleTaskCompleted={toggleTaskCompletedMocked}
        deleteTask={deleteTaskMocked}
  />);
  const liElement = screen.getByTestId('liTodo-todo-1');
  expect(liElement).toBeInTheDocument();
  expect(liElement).toHaveClass('todo--completed');

  const removeButton = screen.queryByTestId('btnRemoveTodo');
  expect(removeButton).toBeInTheDocument();
});
