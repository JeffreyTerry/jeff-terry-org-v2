import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { StaticImage, Layout } from "gatsby-plugin-image";
import ExpertiseItem from "./expertise/ExpertiseItem";
import { SectionHeader } from "../styled/components";
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
} from "@fortawesome/free-brands-svg-icons";
import "./Expertise.css";

const expertiseItemImageProps: {
  className: string;
  width: number;
  layout: Layout;
  placeholder: "blurred" | "none" | "tracedSVG" | "dominantColor";
} = {
  width: 200,
  layout: "constrained",
  placeholder: "blurred",
  className: "expertise-item-image",
};

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
  return (
    <>
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
              staticImage={
                <StaticImage
                  src='../../images/expertise/Java.png'
                  alt="The 'Java' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Java'
              stars={5}
            />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Python.png'
                  alt="The 'Python' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Python'
              stars={5}
            />
            <ExpertiseItem icon={faJsSquare} name='JavaScript' stars={5} iconColor='#f7df3a' />
            <ExpertiseItem icon={faHtml5} name='HTML' stars={5} iconColor='#254deb' />
            <ExpertiseItem icon={faCss3Alt} name='CSS' stars={5} iconColor='#e44d29' />
            <ExpertiseItem icon={faBootstrap} name='Bootstrap' stars={5} iconColor='#7853b0' />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Django.png'
                  alt="The 'Django' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Django'
              stars={5}
            />
            <ExpertiseItem icon={faReact} name='ReactJS' stars={5} iconColor='#61dbfa' />

            {/* 4 stars */}
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/TypeScript.png'
                  alt="The 'TypeScript' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='TypeScript'
              stars={4}
            />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Redux.png'
                  alt="The 'Redux' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Redux'
              stars={4}
            />

            {/* 3 stars */}
            <ExpertiseItem icon={faAws} name='AWS' stars={3} iconColor='#ec9137' />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/PostgreSQL.png'
                  alt="The 'PostgreSQL' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='PostgreSQL'
              stars={3}
            />
            <ExpertiseItem icon={faDocker} name='Docker' stars={3} iconColor='#2396ea' />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/CPlusPlus.png'
                  alt="The 'C' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='C++'
              stars={3}
            />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/C.png'
                  alt="The 'C' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='C'
              stars={3}
            />
            <ExpertiseItem icon={faNodeJs} name='NodeJS' stars={3} iconColor='#689f66' />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Gatsby.png'
                  alt="The 'Gatsby' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Gatsby'
              stars={3}
            />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Bash.png'
                  alt="The 'Bash' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Bash'
              stars={3}
            />

            {/* 2 stars */}
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/CSharp.png'
                  alt="The 'C' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='C#'
              stars={2}
            />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Perl.png'
                  alt="The 'Perl' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Perl'
              stars={2}
            />

            {/* 1 star */}
            <ExpertiseItem icon={faSwift} name='Swift' stars={1} iconColor='#f05139' />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Angular.png'
                  alt="The 'Angular' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Angular'
              stars={1}
            />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Haskell.png'
                  alt="The 'Haskell' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Haskell'
              stars={1}
            />
            <ExpertiseItem
              staticImage={
                <StaticImage
                  src='../../images/expertise/Lisp.png'
                  alt="The 'Scheme' logo"
                  {...expertiseItemImageProps}
                />
              }
              name='Scheme'
              stars={1}
            />
          </Row>
          <Row>
            <OutroCol xs={12}>
              <OutroText>...and I'm always learning new stuff!</OutroText>
            </OutroCol>
          </Row>
        </Col>
      </ExpertiseRow>
    </>
  );
}

export default Expertise;
