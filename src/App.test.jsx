import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Fertisense home page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /fertisense/i })).toBeInTheDocument();
});
