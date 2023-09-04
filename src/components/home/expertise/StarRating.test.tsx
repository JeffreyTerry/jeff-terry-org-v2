import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import StarRating from './StarRating';

afterEach(cleanup);

test.each([0, 1, 2, 3, 4, 5])('renders %i stars correctly', (i) => {
  render(<StarRating stars={i} />);

  const solidStars = screen.queryAllByTestId('star-rating-solid-star') || [];
  const regularStars = screen.queryAllByTestId('star-rating-regular-star') || [];

  expect(solidStars).toHaveLength(i);
  expect(regularStars).toHaveLength(5 - i);
});

it('handles large inputs gracefully', () => {
  render(<StarRating stars={10} />);

  const solidStars = screen.queryAllByTestId('star-rating-solid-star') || [];
  const regularStars = screen.queryAllByTestId('star-rating-regular-star') || [];

  expect(solidStars).toHaveLength(5);
  expect(regularStars).toHaveLength(0);
});

it('handles negative inputs gracefully', () => {
  render(<StarRating stars={-10} />);

  const solidStars = screen.queryAllByTestId('star-rating-solid-star') || [];
  const regularStars = screen.queryAllByTestId('star-rating-regular-star') || [];

  expect(solidStars).toHaveLength(0);
  expect(regularStars).toHaveLength(5);
});
