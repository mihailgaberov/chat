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
  quaternaryColor: string;
}

export const darkTheme = {
  primaryColor: "#e9e9eb",
  quaternaryColor: "#1e5266",
  secondaryColor: "#333",
  tertiaryColor: "#111",
};

export const lightTheme = {
  primaryColor: "#e9e9eb",
  quaternaryColor: "#93abe1",
  secondaryColor: "#e1851b",
  tertiaryColor: "#801a08",
};

export default styled;
export { css, keyframes, ThemeProvider };