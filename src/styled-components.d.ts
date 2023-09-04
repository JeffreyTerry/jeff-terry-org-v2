import type { CSSProp } from "styled-components";
import { ColorTheme } from "./utils/constants";

declare module "styled-components" {
  export interface DefaultTheme extends ColorTheme {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
