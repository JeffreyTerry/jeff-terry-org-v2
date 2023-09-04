import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import MailTo, { createMailToLink } from './MailTo';

afterEach(cleanup);

it('renders without crashing', () => {
  render(
    <MailTo emailUser='test' emailHost='gmail.com'>
      Click to open your email client
    </MailTo>
  );
});

it('obfuscates the email address', () => {
  const mailToText = 'hello';
  render(
    <MailTo emailUser='test' emailHost='gmail.com'>
      {mailToText}
    </MailTo>
  );

  const mailTo = screen.getByText(mailToText);
  expect(mailTo.getAttribute('href')).not.toContain('gmail.com');
});

it('creates the correct mailto link', () => {
  const link = createMailToLink('test', 'gmail.com');
  expect(link).toBe('mailto:test@gmail.com');
});
