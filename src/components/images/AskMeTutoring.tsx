import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RecentProjectImage from '../home/recent-projects/RecentProjectImage';

function AskMeTutoring() {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "AskMeTutoring.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`);

  return (
    <RecentProjectImage
      projectUrl='https://askmetutoring.org/courses'
      projectName='AskMe Tutoring'
      fluid={data.file.childImageSharp.gatsbyImageData}
    />
  );
}

export default AskMeTutoring;
