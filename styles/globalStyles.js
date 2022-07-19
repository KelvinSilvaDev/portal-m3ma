import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background: #040004;
    color: #c2c2c2;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
