import { render, screen } from '@testing-library/react';
import App from './App';

test ('renders App component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Break Out/i);
  expect(linkElement).toBeInTheDocument();
});
