import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Presly from '../images/Presly';
import Surfy from '../images/Surfy';
import AskMeTutoring from '../images/AskMeTutoring';
import { SectionHeader } from '../styled/components';

const RecentProjectsRow = styled(Row)`
  background-color: ${(props) => props.theme.bgColorSecondary};
  padding-bottom: 2rem;

  @media (min-width: 992px) {
    padding-bottom: 2.5rem;
  }
  @media (min-width: 1200px) {
    padding-bottom: 3.5rem;
  }
`;

const ProjectCol = styled(Col)`
  margin-bottom: 2.5rem;

  @media (min-width: 576px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 1800px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

function RecentProjects() {
  return (
    <RecentProjectsRow>
      <Col xs={{ span: 10, offset: 1 }} className='col-3k-8 offset-3k-2 col-4k-6 offset-4k-3'>
        <Row>
          <Col xs={12}>
            <SectionHeader>Recent Projects</SectionHeader>
          </Col>
        </Row>
        <Row>
          <ProjectCol xs={12} md={6} xl={4}>
            <Surfy />
          </ProjectCol>
          <ProjectCol xs={12} md={6} xl={4}>
            <Presly />
          </ProjectCol>
          <ProjectCol xs={12} md={6} xl={4}>
            <AskMeTutoring />
          </ProjectCol>
        </Row>
      </Col>
    </RecentProjectsRow>
  );
}

export default RecentProjects;
