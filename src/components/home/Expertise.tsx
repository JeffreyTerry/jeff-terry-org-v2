import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import ExpertiseItem from './expertise/ExpertiseItem';
import { SectionHeader } from '../styled/components';
import {
  faAws,
  faBootstrap,
  faCss3Alt,
  faDocker,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSwift,
} from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';

const ExpertiseRow = styled(Row)`
  padding-bottom: 70px;
`;

const OutroCol = styled(Col)`
  text-align: center;
`;

const OutroText = styled.h3`
  font-size: 1.75rem;

  @media (min-width: 768px) {
    font-size: 1.85rem;
  }
  @media (min-width: 992px) {
    font-size: 2.25rem;
  }
`;

function Expertise() {
  // Get all of the logo images.
  const logoImageData = useStaticQuery(graphql`{
  python: file(relativePath: {eq: "expertise/Python.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  java: file(relativePath: {eq: "expertise/Java.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  django: file(relativePath: {eq: "expertise/Django.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  redux: file(relativePath: {eq: "expertise/Redux.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  cplusplus: file(relativePath: {eq: "expertise/CPlusPlus.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  c: file(relativePath: {eq: "expertise/C.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  csharp: file(relativePath: {eq: "expertise/CSharp.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  postgresql: file(relativePath: {eq: "expertise/PostgreSQL.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  typescript: file(relativePath: {eq: "expertise/TypeScript.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  gatsby: file(relativePath: {eq: "expertise/Gatsby.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  bash: file(relativePath: {eq: "expertise/Bash.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  perl: file(relativePath: {eq: "expertise/Perl.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  haskell: file(relativePath: {eq: "expertise/Haskell.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  scheme: file(relativePath: {eq: "expertise/Lisp.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  angular: file(relativePath: {eq: "expertise/Angular.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
}`);

  return <>
    <ExpertiseRow>
      <Col xs={{ span: 10, offset: 1 }} className='col-3k-8 offset-3k-2 col-4k-6 offset-4k-3'>
        <Row>
          <Col xs={12}>
            <SectionHeader>Languages &amp; Technologies</SectionHeader>
          </Col>
        </Row>
        <Row>
          {/* 5 stars */}
          <ExpertiseItem
            logoImage={logoImageData.java.childImageSharp.gatsbyImageData}
            name='Java'
            stars={5}
          />
          <ExpertiseItem
            logoImage={logoImageData.python.childImageSharp.gatsbyImageData}
            name='Python'
            stars={5}
          />
          <ExpertiseItem icon={faJsSquare} name='JavaScript' stars={5} iconColor='#f7df3a' />
          <ExpertiseItem icon={faHtml5} name='HTML' stars={5} iconColor='#254deb' />
          <ExpertiseItem icon={faCss3Alt} name='CSS' stars={5} iconColor='#e44d29' />
          <ExpertiseItem icon={faBootstrap} name='Bootstrap' stars={5} iconColor='#7853b0' />
          <ExpertiseItem
            logoImage={logoImageData.django.childImageSharp.gatsbyImageData}
            name='Django'
            stars={5}
          />
          <ExpertiseItem icon={faReact} name='ReactJS' stars={5} iconColor='#61dbfa' />

          {/* 4 stars */}
          <ExpertiseItem
            logoImage={logoImageData.typescript.childImageSharp.gatsbyImageData}
            name='TypeScript'
            stars={4}
          />
          <ExpertiseItem
            logoImage={logoImageData.redux.childImageSharp.gatsbyImageData}
            name='Redux'
            stars={4}
          />

          {/* 3 stars */}
          <ExpertiseItem icon={faAws} name='AWS' stars={3} iconColor='#ec9137' />
          <ExpertiseItem
            logoImage={logoImageData.postgresql.childImageSharp.gatsbyImageData}
            name='PostgreSQL'
            stars={3}
          />
          <ExpertiseItem icon={faDocker} name='Docker' stars={3} iconColor='#2396ea' />
          <ExpertiseItem
            logoImage={logoImageData.cplusplus.childImageSharp.gatsbyImageData}
            name='C++'
            stars={3}
          />
          <ExpertiseItem logoImage={logoImageData.c.childImageSharp.gatsbyImageData} name='C' stars={3} />
          <ExpertiseItem icon={faNodeJs} name='NodeJS' stars={3} iconColor='#689f66' />
          <ExpertiseItem
            logoImage={logoImageData.gatsby.childImageSharp.gatsbyImageData}
            name='Gatsby'
            stars={3}
          />
          <ExpertiseItem
            logoImage={logoImageData.bash.childImageSharp.gatsbyImageData}
            name='Bash'
            stars={3}
          />

          {/* 2 stars */}
          <ExpertiseItem
            logoImage={logoImageData.csharp.childImageSharp.gatsbyImageData}
            name='C#'
            stars={2}
          />
          <ExpertiseItem
            logoImage={logoImageData.perl.childImageSharp.gatsbyImageData}
            name='Perl'
            stars={2}
          />

          {/* 1 star */}
          <ExpertiseItem icon={faSwift} name='Swift' stars={1} iconColor='#f05139' />
          <ExpertiseItem
            logoImage={logoImageData.angular.childImageSharp.gatsbyImageData}
            name='Angular'
            stars={1}
          />
          <ExpertiseItem
            logoImage={logoImageData.haskell.childImageSharp.gatsbyImageData}
            name='Haskell'
            stars={1}
          />
          <ExpertiseItem
            logoImage={logoImageData.scheme.childImageSharp.gatsbyImageData}
            name='Scheme'
            stars={1}
          />
        </Row>
        <Row>
          <OutroCol xs={12}>
            <OutroText>...and I'm always excited to learn new stuff!</OutroText>
          </OutroCol>
        </Row>
      </Col>
    </ExpertiseRow>
  </>;
}

export default Expertise;
