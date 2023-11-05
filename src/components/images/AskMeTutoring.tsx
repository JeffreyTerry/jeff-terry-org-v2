import React from "react";
import RecentProjectImage from "../home/recent-projects/RecentProjectImage";
import { StaticImage } from "gatsby-plugin-image";

function AskMeTutoring() {
  return (
    <RecentProjectImage
      projectUrl='https://askmetutoring.org/courses'
      projectName='AskMe Tutoring'
      staticImage={
        <StaticImage
          src='../../images/AskMeTutoring.png'
          alt='AskMe Tutoring'
          layout='fullWidth'
          placeholder='blurred'
        />
      }
    />
  );
}

export default AskMeTutoring;
