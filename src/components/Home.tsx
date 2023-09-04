import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Introduction from './home/Introduction';
import RecentProjects from './home/RecentProjects';
import Expertise from './home/Expertise';
import Links from './home/Links';
// import Bookshelf from './home/Bookshelf';
import Footer from './home/Footer';

const HomeContainer = styled(Container)`
  padding-top: 50px;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
`;

function Home() {
  return (
    <HomeContainer fluid>
      <Introduction />
      <RecentProjects />
      <Expertise />
      <Links />
      <Footer />
      {/* <Bookshelf /> */}
    </HomeContainer>
  );
}

export default Home;
