import * as styledComponents from 'styled-components';

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
  primaryLightColor: '#e9e9eb',
  secondaryLightColor: '#777',
  primaryDarkColor: '#1e5266',
  secondaryDarkColor: '#111',
};

export const lightTheme = {
  primaryLightColor: '#e9e9eb',
  secondaryLightColor: '#ed7a7a',
  primaryDarkColor: '#da0000',
  secondaryDarkColor: '#7b0000',
};

export default styled;
export { css, keyframes, ThemeProvider };