import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import MailTo, { decodeEmail, encodeEmail } from './MailTo';

afterEach(cleanup);

const encodedEmail = encodeEmail('test@gmail.com');

it('renders without crashing', () => {
  render(
    <MailTo encodedEmail={encodedEmail}>Click to open your email client</MailTo>
  );
});

it('keeps the email address out of the DOM', () => {
  const { container } = render(
    <MailTo encodedEmail={encodedEmail}>hello</MailTo>
  );

  expect(container.innerHTML).not.toContain('test');
  expect(container.innerHTML).not.toContain('gmail');
});

it('ignores clicks dispatched from scripts', () => {
  render(<MailTo encodedEmail={encodedEmail}>hello</MailTo>);

  const hrefBefore = window.location.href;
  fireEvent.click(screen.getByText('hello'));
  expect(window.location.href).toBe(hrefBefore);
});

it('decodes the encoded address', () => {
  expect(encodedEmail.join(',')).not.toContain('gmail');
  expect(decodeEmail(encodedEmail)).toBe('test@gmail.com');
});
