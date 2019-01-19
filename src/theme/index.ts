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
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

export const theme = {
  primaryColor: "#e9e9eb",
  secondaryColor: "#333",
  tertiaryColor: "#111",
};

export default styled;
export { css, keyframes, ThemeProvider };