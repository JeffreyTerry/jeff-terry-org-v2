import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GatsbyImageProps } from "gatsby-plugin-image";
import styled from "styled-components";

interface ExpertiseItemImageIconProps {
  name: string;
}

const StylesGatsbyImage = styled(GatsbyImage)`
  margin-top: 0.425vw;
  width: 17.38vw;
  display: inline-block;
  margin-bottom: 0.38rem;

  @media (min-width: 576px) {
    width: 11.38vw;
  }
  @media (min-width: 768px) {
    width: 8.38vw;
  }
  @media (min-width: 992px) {
    width: 6.38vw;
  }
  @media (min-width: 1800px) {
    width: 6vw;
  }
  @media (min-width: 2800px) {
    width: 4vw;
  }
`;

function ExpertiseItemImageIcon({
  name,
  ...props
}: GatsbyImageProps & ExpertiseItemImageIconProps) {
  return <StylesGatsbyImage {...props} alt={`The ${name} logo`} />;
}

export default ExpertiseItemImageIcon;
