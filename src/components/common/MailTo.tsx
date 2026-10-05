// Based on Jason Bellamy's npm package react-mailto: https://github.com/jasonbellamy/react-mailto
import React, { AnchorHTMLAttributes } from 'react';

// The address never appears in plain text in the HTML, the JS bundle or the
// source. It is stored XOR-encoded and only decoded when a person clicks.
const KEY = 'jeffterry.org';

export const encodeEmail = (email: string) =>
  [...email].map((c, i) => c.charCodeAt(0) ^ KEY.charCodeAt(i % KEY.length));

export const decodeEmail = (encoded: number[]) =>
  encoded
    .map((n, i) => String.fromCharCode(n ^ KEY.charCodeAt(i % KEY.length)))
    .join('');

interface MailToOptions {
  /** The address as produced by `encodeEmail`. */
  encodedEmail: number[];
  children: React.ReactNode;
}

function MailTo({
  encodedEmail,
  children,
  ...rest
}: MailToOptions & AnchorHTMLAttributes<HTMLAnchorElement>) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    // Ignore clicks dispatched from scripts (e.g. `element.click()` in a scraper)
    if (!event.isTrusted) return;
    window.location.href = `mailto:${decodeEmail(encodedEmail)}`;
  }

  return (
    <a onClick={handleClick} href='#' rel='nofollow' {...rest}>
      {children}
    </a>
  );
}

export default MailTo;
