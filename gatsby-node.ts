import type { GatsbyNode } from "gatsby";

// Don't publish source maps, which would ship the original source to the site
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  actions,
}) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({ devtool: false });
  }
};
