import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RecentProjectImage from '../home/recent-projects/RecentProjectImage';

function Surfy() {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "Surfy.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`);

  return (
    <RecentProjectImage
      projectUrl='https://getsurfy.org'
      projectName='Surfy'
      fluid={data.file.childImageSharp.gatsbyImageData}
    />
  );
}

export default Surfy;
