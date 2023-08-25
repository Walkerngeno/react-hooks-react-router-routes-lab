import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

test('renders all NavLinks correctly', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const homeNavLink = screen.getByText(/Home/i);
  const moviesNavLink = screen.getByText(/Movies/i);
  const directorsNavLink = screen.getByText(/Directors/i);
  const actorsNavLink = screen.getByText(/Actors/i);

  expect(homeNavLink).toBeInTheDocument();
  expect(moviesNavLink).toBeInTheDocument();
  expect(directorsNavLink).toBeInTheDocument();
  expect(actorsNavLink).toBeInTheDocument();
});

test('active class is added to the clicked NavLink', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const moviesNavLink = screen.getByText(/Movies/i);

  fireEvent.click(moviesNavLink);

  expect(moviesNavLink).toHaveClass('active');
});
