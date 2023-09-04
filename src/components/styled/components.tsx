import styled from 'styled-components';

export const NoWrap = styled.span`
  white-space: nowrap;
`;

export const SectionHeader = styled.h2`
  font-size: 2.25rem;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 3.25rem;
  }
  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-top: 3.5rem;
    margin-bottom: 3rem;
    margin-left: 2rem;
    text-align: left;
  }
  @media (min-width: 992px) {
    font-size: 3.75rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
    margin-bottom: 3.75rem;
    margin-left: 4rem;
  }
  @media (min-width: 1600px) {
    font-size: 4.25rem;
  }
  @media (min-width: 2000px) {
    font-size: 4.5rem;
  }
  @media (min-width: 2800px) {
    font-size: 4.75rem;
  }
  @media (min-width: 3800px) {
    font-size: 5rem;
  }
`;
