import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    fontColor: string;
  }
}

export const lightTheme = {
  body: "#FFFFFFFF",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#FFF",
};

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.body};
    },
`;
