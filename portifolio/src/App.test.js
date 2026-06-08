import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza a página inicial', () => {
  render(<App />);
  expect(screen.getByText(/Olá, sou Wesley/i)).toBeInTheDocument();
});
