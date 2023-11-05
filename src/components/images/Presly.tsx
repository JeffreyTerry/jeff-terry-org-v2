import React from "react";
import RecentProjectImage from "../home/recent-projects/RecentProjectImage";
import { StaticImage } from "gatsby-plugin-image";

function Presly() {
  return (
    <RecentProjectImage
      projectUrl='https://presly.org'
      projectName='Presly'
      staticImage={
        <StaticImage
          src='../../images/Presly.png'
          alt='Presly'
          layout='fullWidth'
          placeholder='blurred'
        />
      }
    />
  );
}

export default Presly;
