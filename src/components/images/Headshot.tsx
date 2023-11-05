import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Headshot() {
  return (
    <StaticImage
      src='../../images/Headshot.png'
      alt='A photo of me'
      width={200}
      height={200}
      layout='constrained'
      placeholder='blurred'
    />
  );
}

export default Headshot;
