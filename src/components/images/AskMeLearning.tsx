import React from "react";
import RecentProjectImage from "../home/recent-projects/RecentProjectImage";
import { StaticImage } from "gatsby-plugin-image";

function AskMeLearning() {
  return (
    <RecentProjectImage
      projectUrl='https://askmelearning.org/courses'
      projectName='AskMe Learning'
      staticImage={
        <StaticImage
          src='../../images/AskMeLearning.png'
          alt='AskMe Learning'
          layout='fullWidth'
          placeholder='blurred'
        />
      }
    />
  );
}

export default AskMeLearning;
