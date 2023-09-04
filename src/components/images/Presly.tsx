import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import RecentProjectImage from "../home/recent-projects/RecentProjectImage";

function Presly() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Presly.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <RecentProjectImage
      projectUrl='https://presly.org'
      projectName='Presly'
      alt='Presly'
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
}

export default Presly;
