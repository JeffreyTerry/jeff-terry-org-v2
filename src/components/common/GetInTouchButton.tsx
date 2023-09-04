import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import MailTo from './MailTo';

const StyledMailTo = styled(MailTo)`
  width: fit-content;
  text-align: center;
  font-size: 1.25rem;
  border: 2px solid ${(props) => props.theme.primaryColor};
  padding: 0.25rem 2rem;
  display: inline-block;
  color: ${(props) => props.theme.primaryColor};
  border-radius: 4rem;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  :hover {
    text-decoration: inherit;
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.primaryColor};
  }

  @media (min-width: 576px) {
    font-size: 1.5rem;
    padding: 0.25rem 4rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.75rem;
  }
  @media (min-width: 2000px) {
    font-size: 2rem;
  }
  @media (min-width: 2800px) {
    font-size: 2.25rem;
  }
  @media (min-width: 3800px) {
    font-size: 2.5rem;
  }
`;

function GetInTouchButton({ icon = true }) {
  return (
    <StyledMailTo emailUser='jterry94' emailHost='gmail.com'>
      {icon && <FontAwesomeIcon icon={faEnvelope} className='me-3' />}
      Get&nbsp;in&nbsp;touch
    </StyledMailTo>
  );
}

export default GetInTouchButton;
