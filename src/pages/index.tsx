import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Home from "../components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Jeff Terry</title>
    <meta charSet='utf-8' />
    <meta httpEquiv='x-ua-compatible' content='ie=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
    <meta
      name='keywords'
      content='Jeffrey, Terry, Software, Engineer, Durham, Chapel Hill, Raleigh, North Carolina, Norman, Oklahoma'
    />
  </>
);
