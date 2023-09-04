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

export const Head: HeadFC = () => <title>Jeff Terry</title>;
