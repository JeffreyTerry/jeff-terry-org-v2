import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GatsbyImageProps } from "gatsby-plugin-image";
import styled from "styled-components";

interface BookImageIconProps {
  name: string;
}

const StyledGatsbyImage = styled(GatsbyImage)`
  margin-top: 0.425vw;
  width: 12vw;
  display: inline-block;
  margin-bottom: 0.38rem;
`;

function BookImageIcon({ name, ...props }: GatsbyImageProps & BookImageIconProps) {
  return <StyledGatsbyImage {...props} alt={name} />;
}

export default BookImageIcon;
