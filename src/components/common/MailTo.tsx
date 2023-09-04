// Based on Jason Bellamy's npm package react-mailto: https://github.com/jasonbellamy/react-mailto
import React, { AnchorHTMLAttributes } from 'react';

export const createMailToLink = (emailUser: string, emailHost: string) => {
  let link = `mailto:${emailUser}@${emailHost}`;
  return link;
};

interface MailToOptions {
  /** The user portion of the email address. I.e. `jane` in jane@gmail.com */
  emailUser: string;
  /** The host portion of the email address. I.e. `gmail.com` in jane@gmail.com */
  emailHost: string;
  children: React.ReactNode;
  obfuscate?: boolean;
}

function MailTo({
  emailUser,
  emailHost,
  children,
  obfuscate = true,
  ...rest
}: MailToOptions & AnchorHTMLAttributes<HTMLAnchorElement>) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.location.href = createMailToLink(emailUser, emailHost);
  }

  if (obfuscate) {
    // Email obfuscated
    return (
      <a onClick={handleClick} href='mailto:obfuscated' {...rest}>
        {children}
      </a>
    );
  }

  // Email not obfuscated
  return (
    <a href={createMailToLink(emailUser, emailHost)} {...rest}>
      {children}
    </a>
  );
}

export default MailTo;
