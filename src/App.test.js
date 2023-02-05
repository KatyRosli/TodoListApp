import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App tasks={[]}/>);
  const headerElement = screen.getByText('Create task');
  expect(headerElement).toBeInTheDocument();
});
