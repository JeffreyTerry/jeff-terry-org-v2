import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Button from './Button';

afterEach(cleanup);

it('renders with props', () => {
  render(
    <Button className='test-class' aria-hidden='true'>
      hello
    </Button>
  );

  const button = screen.getByText('hello');
  expect(button.classList).toContain('test-class');
  expect(button.getAttribute('aria-hidden')).toBeTruthy();
});
