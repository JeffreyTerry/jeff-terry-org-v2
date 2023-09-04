import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled, { ThemeContext } from "styled-components";
import { SectionHeader } from "../styled/components";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { withPrefix } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoodreads, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NoWrap } from "../styled/components";
import { ColorTheme } from "../../utils/constants";

const LinksRow = styled(Row)`
  background-color: ${(props) => props.theme.bgColorSecondary};
  padding-bottom: 2.5rem;

  @media (min-width: 768px) {
    padding-bottom: 3.5rem;
  }
`;

const LinkCol = styled(Col)`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2.75rem;
  }
  @media (min-width: 1200px) {
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const LinkItem = styled.h3`
  color: ${(props) => props.theme.themePrimary};
  margin-bottom: 60px;
  font-size: 2rem;
  font-weight: 500;
  display: inline;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
  @media (min-width: 1400px) {
    font-size: 3rem;
  }
  @media (min-width: 1800px) {
    font-size: 3.25rem;
  }
  @media (min-width: 2400px) {
    font-size: 3.5rem;
  }
  @media (min-width: 2800px) {
    font-size: 3.75rem;
  }
  @media (min-width: 3800px) {
    font-size: 4.25rem;
  }
`;

function Links() {
  const theme: ColorTheme = useContext(ThemeContext);

  return (
    <LinksRow>
      <Col xs={{ span: 10, offset: 1 }} className='col-3k-8 offset-3k-2 col-4k-6 offset-4k-3'>
        <Row>
          <Col xs={12}>
            <SectionHeader>Links</SectionHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <LinkCol xs={12} md={6} xl={3}>
                {/* <Link to='/resume' style={{ color: '#007A39' }}> */}
                {/* <Link to='/resume' style={{ color: '#148F46' }}> */}
                <a
                  href={withPrefix("./JeffTerryResume.pdf")}
                  style={{ color: theme.name === "light" ? "#009D49" : "#3FBD79" }}
                >
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faFileAlt} className='me-3' />
                      Resume
                    </NoWrap>
                  </LinkItem>
                </a>
              </LinkCol>
              <LinkCol xs={12} md={6} xl={3}>
                <OutboundLink
                  href='https://github.com/JeffreyTerry'
                  style={{
                    color: theme.name === "light" ? "#171515" : "rgb(240, 246, 251)",
                  }}
                >
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faGithub} className='me-3' />
                      Github
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
              <LinkCol xs={12} md={6} xl={3}>
                <OutboundLink
                  href='https://www.linkedin.com/in/theonlyjeff2/'
                  style={{ color: "#0078b7" }}
                >
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faLinkedin} className='me-3' />
                      LinkedIn
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
              <LinkCol xs={12} md={6} xl={3}>
                <OutboundLink
                  href='https://www.goodreads.com/user/show/43070334-jeffrey-terry'
                  style={{
                    // color: theme.name === 'light' ? '#553b0e' : 'rgb(228, 175, 134)', // Not the official color, but a bit more orange
                    color: theme.name === "light" ? "#553b0e" : "rgb(228, 223, 202)",
                  }}
                >
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faGoodreads} className='me-3' />
                      Goodreads
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
            </Row>
          </Col>
        </Row>
      </Col>
    </LinksRow>
  );
}

export default Links;
