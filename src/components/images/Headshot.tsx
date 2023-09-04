import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function Headshot() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Headshot.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, height: 200, layout: CONSTRAINED)
        }
      }
    }
  `);

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt='A photo of me' />;
}

export default Headshot;
