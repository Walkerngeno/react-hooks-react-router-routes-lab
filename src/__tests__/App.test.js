import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders NavBar', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const navBarElement = screen.getByText(/navbar/i);
  expect(navBarElement).toBeInTheDocument();
});

test('renders Home component on the default route', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const homeComponent = screen.getByText(/welcome to the home/i);
  expect(homeComponent).toBeInTheDocument();
});

test('renders Movies component when on /movies route', () => {
  render(
    <Router initialEntries={['/movies']}>
      <App />
    </Router>
  );
  const moviesComponent = screen.getByText(/list of movies/i);
  expect(moviesComponent).toBeInTheDocument();
});

test('renders Directors component when on /directors route', () => {
  render(
    <Router initialEntries={['/directors']}>
      <App />
    </Router>
  );
  const directorsComponent = screen.getByText(/list of directors/i);
  expect(directorsComponent).toBeInTheDocument();
});

test('renders Actors component when on /actors route', () => {
  render(
    <Router initialEntries={['/actors']}>
      <App />
    </Router>
  );
  const actorsComponent = screen.getByText(/list of actors/i);
  expect(actorsComponent).toBeInTheDocument();
});
