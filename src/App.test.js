import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GlobalBar from './features/navs/GlobalBar';

test('renders the global bar navigation without losing its title and actions', () => {
  render(
    <MemoryRouter>
      <GlobalBar />
    </MemoryRouter>
  );

  expect(screen.getByTestId('global-bar')).toBeInTheDocument();
  expect(screen.getByTestId('global-bar-home-link')).toBeInTheDocument();
  expect(screen.getByText('CarlosDamasio.com')).toBeInTheDocument();
  expect(screen.getByTestId('global-bar-actions')).toBeInTheDocument();
});
