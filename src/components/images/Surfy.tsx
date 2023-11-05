import React from "react";
import RecentProjectImage from "../home/recent-projects/RecentProjectImage";
import { StaticImage } from "gatsby-plugin-image";

function Surfy() {
  return (
    <RecentProjectImage
      projectUrl='https://getsurfy.org'
      projectName='Surfy'
      staticImage={
        <StaticImage
          src='../../images/Surfy.png'
          alt='Surfy'
          layout='fullWidth'
          placeholder='blurred'
        />
      }
    />
  );
}

export default Surfy;
