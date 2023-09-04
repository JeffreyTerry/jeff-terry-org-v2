import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { NoWrap } from "../styled/components";
import Headshot from "../images/Headshot";
import GetInTouchButton from "../common/GetInTouchButton";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const IntroductionRow = styled(Row)`
  padding-bottom: 70px;
`;

const Name = styled.h1`
  font-size: 3.25rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 4rem;
    margin-top: 0;
    text-align: left;
  }
  @media (min-width: 768px) {
    font-size: 5rem;
  }
  @media (min-width: 992px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (min-width: 1600px) {
    font-size: 6rem;
  }
  @media (min-width: 1800px) {
    font-size: 7rem;
  }
`;

// Add this styling back in if I decide to remove my location again.
// const JobTitle = styled.h3`
//   font-size: 1.5rem;
//   line-height: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 0;
//   @media (min-width: 350px) {
//     font-size: 1.6rem;
//   }
//   @media (min-width: 400px) {
//     font-size: 1.7rem;
//   }
//   @media (min-width: 576px) {
//     font-size: 1.75rem;
//   }
//   @media (min-width: 768px) {
//     font-size: 2rem;
//   }
//   @media (min-width: 992px) {
//     font-size: 1.85rem;
//   }
//   @media (min-width: 1200px) {
//     font-size: 2rem;
//   }
//   @media (min-width: 1600px) {
//     font-size: 2.25rem;
//   }
//   @media (min-width: 1800px) {
//     font-size: 2.75rem;
//   }
// `;

// Add this styling back in if I decide to add my location back in.
const JobTitle = styled.h3`
  font-size: 1.35rem;
  line-height: 2.5rem;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 1rem;
  @media (min-width: 576px) {
    margin-top: 0;
    font-size: 1.5rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1800px) {
    font-size: 1.85rem;
  }
`;

const FastFactsRow = styled(Row)`
  margin-top: 25px;
`;

const FastFactCol = styled(Col)`
  margin-top: 15px;
`;

const FastFact = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  @media (min-width: 576px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1800px) {
    font-size: 2rem;
  }
`;

const BiographyCol = styled(Col)`
  cursor: default;
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
  @media (min-width: 1600px) {
    font-size: 1.15rem;
  }
  @media (min-width: 1800px) {
    font-size: 1.25rem;
  }
  @media (min-width: 2000px) {
    font-size: 1.375rem;
  }
  @media (min-width: 2200px) {
    margin-top: 3rem;
    font-size: 1.5rem;
  }
  @media (min-width: 2800px) {
    margin-top: 0;
    font-size: 1.75rem;
  }
  @media (min-width: 3400px) {
    margin-top: 1.5rem;
  }
  @media (min-width: 3800px) {
    font-size: 2rem;
  }
`;

const BiographyParagraph = styled.p`
  text-align: left;
`;

const ReadMoreButton = styled.button`
  color: inherit;
  background-color: unset;
  border: unset;
  padding: unset;
  display: inline;
  text-align: center;
  text-decoration: underline;
`;

function Introduction() {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <IntroductionRow>
        <Col xs={{ span: 10, offset: 1 }} className='col-3k-8 offset-3k-2 col-4k-6 offset-4k-3'>
          <Row>
            <Col xs={12} lg={8} className='col-2k-7 col-3k-6 col-4k-5'>
              <Row className='align-items-center'>
                <Col xs={{ span: 8, offset: 2 }} sm={{ span: 4, offset: 0 }} md={3} lg={4} xl={3}>
                  <Headshot />
                </Col>
                <Col xs={12} sm={8} md={9} lg={8} xl={9}>
                  <Name className='text-center text-sm-start'>Jeff Terry</Name>
                  {/* Only show on larger screens */}
                  <JobTitle className='d-none d-sm-block'>
                    <span className='me-3'>Software Engineer in</span>
                    <NoWrap>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                      <span>Durham, NC</span>
                    </NoWrap>
                  </JobTitle>
                </Col>

                {/* Hide on larger screens */}
                <Col xs={12} className='d-sm-none text-center'>
                  <JobTitle>
                    <span className='me-2 me-sm-3'>Software Engineer in</span>
                    <NoWrap>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                      <span>Durham, NC</span>
                    </NoWrap>
                  </JobTitle>
                </Col>
              </Row>

              <FastFactsRow>
                <FastFactCol
                  xs={12}
                  sm={{ span: 11, offset: 1 }}
                  className='text-center text-sm-start'
                >
                  <FastFact>12+ years software engineering experience</FastFact>
                </FastFactCol>
                <FastFactCol
                  xs={12}
                  sm={{ span: 11, offset: 1 }}
                  className='text-center text-sm-start'
                >
                  <FastFact>2+ years writing pedagogy experience</FastFact>
                </FastFactCol>
                <FastFactCol
                  xs={12}
                  sm={{ span: 11, offset: 1 }}
                  className='text-center text-sm-start'
                >
                  <FastFact>
                    26+ years blinking experience
                    {/* TODO add a question icon with a tooltip */}
                  </FastFact>
                </FastFactCol>
              </FastFactsRow>

              {/* Show only on large screens */}
              <Row className='d-none d-lg-flex'>
                <Col xs={12} className='text-center mt-5'>
                  <GetInTouchButton />
                </Col>
              </Row>
            </Col>
            <BiographyCol
              xs={12}
              lg={4}
              className='col-2k-5 col-3k-6 col-4k-7'
              onClick={() => setReadMore(!readMore)}
            >
              <BiographyParagraph>
                Hi, I’m Jeff, a software engineer based in Durham, North Carolina. My professional
                background is primarily in full-stack web development, but I’ve also done work in a
                bunch of other areas—from robotics, to enterprise software, to data analytics. I’m
                obsessed with building software that improves people’s lives, and I’m always excited
                to learn whatever languages and technologies I need to make that happen!
              </BiographyParagraph>
              <BiographyParagraph>
                I'm currently working as a full-stack engineer for Concertiv, where we're building a
                B2B product procurement platform that integrates workflow, contract management, and
                spend analysis to help companies buy the best products at the best prices.
              </BiographyParagraph>
              {readMore && (
                <>
                  <BiographyParagraph>
                    Previously, I’ve worked as a software engineering intern for Microsoft, National
                    Instruments, and a few other companies, in addition to starting my own company
                    back in college. More recently, I’ve worked as a writing tutor and a rhetoric
                    instructor at the university level. As part of my graduate studies at The Ohio
                    State University, I not only got to read great works of literature, but I also
                    got to study digital media and software usability with a couple of awesome
                    professors. Last year, my graduate work culminated in{" "}
                    <OutboundLink href='https://presly.org'>Presly</OutboundLink>, an online
                    presentation coach that teaches students how to give great presentations.
                  </BiographyParagraph>
                </>
              )}
              <ReadMoreButton onClick={() => setReadMore(!readMore)}>
                Read {readMore ? "less" : "more"}
              </ReadMoreButton>
            </BiographyCol>
          </Row>

          {/* Hide on large screens */}
          <Row className='d-lg-none'>
            <Col xs={12} className='text-center mt-5'>
              <GetInTouchButton />
            </Col>
          </Row>
        </Col>
      </IntroductionRow>
    </>
  );
}

export default Introduction;
