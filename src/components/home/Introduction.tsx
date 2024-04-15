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

const STARTED_CODING_AT = new Date(2009, 1, 1);

function getYearsSinceDate(date: Date): number {
  const today = new Date();

  const differenceInMs = today.getTime() - date.getTime();
  const differenceInYears = differenceInMs / (1000 * 3600 * 24 * 365.25);

  return differenceInYears;
}

function getHoursSpentBuildingSoftware(): string {
  // The initial estimate represents the amount of time I've spent directly building software
  // up to the `initialEstimateMadeOn` date, including:
  // - During MS / HS
  // - During undergrad for personal projects
  // - During on-campus co-ops (i.e. CCEW)
  // - During summer internships
  // - During grad school
  // - As a full-time SWE
  // I've tried to be conservative here since the website will be displaying the value as "X+ hours".
  const initialEstimate = 18000;

  const initialEstimateMadeOn = new Date(2024, 2, 23);
  const yearsSinceInitialEstimate = getYearsSinceDate(initialEstimateMadeOn);

  // Add a conservative number of additional hours to the initial estimate just so that it doesn't get super out of date.
  // Ideally, I should update the initial number with a more accurate estimate as time goes on.
  // Note that this number is a bit low because it only includes time spent directly working on building software
  // (i.e. make sure to exclude meetings, etc...).
  const hoursSpentBuildingSoftwarePerYear = 32 * 48;
  const hoursOfExperienceGainedSinceInitialEstimate =
    yearsSinceInitialEstimate * hoursSpentBuildingSoftwarePerYear;

  const totalEstimate = initialEstimate + hoursOfExperienceGainedSinceInitialEstimate;

  // Truncate the estimate to the nearest thousand to make it more readable
  return (Math.floor(totalEstimate / 1000) * 1000).toLocaleString();
}

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
                      <span>Chapel Hill, NC</span>
                    </NoWrap>
                  </JobTitle>
                </Col>

                {/* Hide on larger screens */}
                <Col xs={12} className='d-sm-none text-center'>
                  <JobTitle>
                    <span className='me-2 me-sm-3'>Software Engineer in</span>
                    <NoWrap>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className='me-2' />
                      <span>Chapel Hill, NC</span>
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
                  <FastFact>
                    {Math.floor(getYearsSinceDate(STARTED_CODING_AT))}+ years coding experience
                  </FastFact>
                </FastFactCol>
                <FastFactCol
                  xs={12}
                  sm={{ span: 11, offset: 1 }}
                  className='text-center text-sm-start'
                >
                  <FastFact>
                    {getHoursSpentBuildingSoftware()}+ hours spent building software
                  </FastFact>
                </FastFactCol>
                <FastFactCol
                  xs={12}
                  sm={{ span: 11, offset: 1 }}
                  className='text-center text-sm-start'
                >
                  <FastFact>2+ years writing pedagogy experience</FastFact>
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
                Hi, I’m Jeff, a software engineer based in North Carolina. My professional
                background is primarily in full-stack software engineering, but I’ve done work in a
                variety of areas—from robotics, to infrastructure / DevOps, to data engineering. I’m
                obsessed with building software that improves people’s lives, and I’m always excited
                to learn whatever languages and technologies I need to make that happen!
              </BiographyParagraph>
              <BiographyParagraph>
                I’m currently at <OutboundLink href='https://spade.com'>Spade</OutboundLink> (YC
                W22), where I'm working on building infrastructure to make possible the next wave of
                fintech innovation. As Spade's first engineering hire, I've spearheaded the buildout
                of our V2 API—including infrastructure, backend, developer tooling, CI/CD pipelines,
                testing strategy, monitoring and logging systems, and more—while playing a leading
                role in establishing our engineering team culture and processes.
              </BiographyParagraph>
              {readMore && (
                <>
                  <BiographyParagraph>
                    At Spade, the systems I've built and the projects I've led have enabled us to
                    maintain an historical uptime above 99.999% and to achieve latencies more than
                    10x lower than those of competitors (in an uptime- and latency-critical space!).
                  </BiographyParagraph>
                  <BiographyParagraph>
                    Recently, I've been focusing my efforts on improving Spade's data pipelines. For
                    instance, I've led projects to increase our underlying data quality, to improve
                    the stability of our pipelines, and to create tooling to empower the data
                    science team to move more quickly and collaborate more easily. As an example,
                    one project I led ended up achieving a 50% increase in the accuracy of our
                    lat/lon data (which was more than even I thought we could achieve, and I tend to
                    be a pretty optimistic person)!
                  </BiographyParagraph>
                  <BiographyParagraph>
                    Previously, I was a full-stack engineer at Concertiv, where I led the
                    development of their B2B product procurement platform, integrating workflow
                    tools, contract management, and spend analysis to help companies optimize B2B
                    spend. Before that, I worked as a software engineering intern for Microsoft,
                    National Instruments, and a few other companies, in addition to co-founding a
                    company back in college.
                  </BiographyParagraph>
                  <BiographyParagraph>
                    Outside of tech, I’ve worked as a writing tutor and a rhetoric instructor at the
                    university level. As part of my graduate studies at The Ohio State University, I
                    focused on two research areas: 1) The impacts of technology on society and the
                    human experience during the Modernist era (~1880–1918; an era that closely
                    mirrors our own, in fact!) and 2) Digital media studies and software usability.
                    My work in the latter area culminated in{" "}
                    <OutboundLink href='https://presly.org'>Presly</OutboundLink>, an online
                    presentation coach that teaches students how to give great presentations.
                  </BiographyParagraph>
                  <BiographyParagraph>
                    My passion for software (and building things more generally) began in the field
                    of robotics, when two friends and I won an international high school robotics
                    competition as eighth graders, a competition we went on to win two more times
                    once we became proper high schoolers. Here's a{" "}
                    <OutboundLink href='https://goo.gl/vQMIP2'>
                      video of two of my favorite robots
                    </OutboundLink>
                    . My experience working in robotics encouraged a first-principles-based,
                    goal-oriented, and honest approach to engineering, which still drives my work
                    today.
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
