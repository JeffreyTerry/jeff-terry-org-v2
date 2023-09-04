import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Home from "../components/Home";
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
    <meta name='keywords' content='Jeffrey, Terry, Durham, North Carolina, Norman, Oklahoma' />
    <link
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
      integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
      crossOrigin='anonymous'
    />
  </>
);
