import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetInTouchButton from '../common/GetInTouchButton';

const FooterRow = styled(Row)`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  text-align: center;
  font-size: 1.1rem;

  @media (min-width: 576px) {
    font-size: 1.75rem;
  }
`;

const GetInTouchButtonRow = styled(Col)`
  margin-bottom: 2.75rem;

  @media (min-width: 768px) {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
`;

function Footer() {
  return (
    <FooterRow>
      <Col xs={12} className='col-3k-8 offset-3k-2 col-4k-6 offset-4k-3'>
        <GetInTouchButtonRow className='text-center'>
          <Col xs={12}>
            <GetInTouchButton />
          </Col>
        </GetInTouchButtonRow>
        <Row>
          <Col xs={12}>
            Made with <FontAwesomeIcon icon={faHeart} /> in Oklahoma.
          </Col>
        </Row>
      </Col>
    </FooterRow>
  );
}

export default Footer;
