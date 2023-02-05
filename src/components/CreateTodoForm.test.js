import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateTodoForm from './CreateTodoForm';

const createTaskMocked = () => {};

describe('TodoForm behavior', ()=>{
  it('create todo form', () => {
    render(<CreateTodoForm />);
    const titleElement = screen.getByText(/Title:/i);
    const descriptionElement = screen.getByText(/Description:/i);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('verify error message when there is no title and description', () => {
    render(<CreateTodoForm />);
    fireEvent.click(screen.getByTestId('btnAddTodo'));
    const errorMsgElement = screen.getByText(/Please enter a title and a description to create a new task./i);
    expect(errorMsgElement).toBeInTheDocument();
  });

  it('clear out the title and description input fields', async () => {
    render(<CreateTodoForm createTask={createTaskMocked} />);
    const inputTitleElement = screen.getByTestId('txtTodoItemToAdd');
    fireEvent.change(inputTitleElement, {
      target: { value: 'Buy Milk' },
      });
    await waitFor(() => {
      expect(inputTitleElement.value).toBe('Buy Milk');
      });
    const inputDescriptionElement = screen.getByTestId('txtTodoItemDescription');
    fireEvent.change(inputDescriptionElement, {
      target: { value: 'Buy 2 cartons of Milk' },
      });
    await waitFor(() => {
      expect(inputDescriptionElement.value).toBe('Buy 2 cartons of Milk');
      });
    fireEvent.click(screen.getByTestId('btnAddTodo'));
    expect(inputTitleElement).toHaveTextContent('');
    expect(inputDescriptionElement).toHaveTextContent('');
  });
});
