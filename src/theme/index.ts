import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
  >;

export interface IThemeInterface {
  primaryLightColor: string;
  secondaryLightColor: string;
  primaryDarkColor: string;
  secondaryDarkColor: string;
}

export const darkTheme = {
  primaryLightColor: "#e9e9eb",
  secondaryLightColor: "#333",
  primaryDarkColor: "#1e5266",
  secondaryDarkColor: "#111",
};

export const lightTheme = {
  primaryLightColor: "#e9e9eb",
  primaryDarkColor: "#cc37fb",
  secondaryDarkColor: "#e10ec2",
  secondaryLightColor: "#93abe1",
};

export default styled;
export { css, keyframes, ThemeProvider };