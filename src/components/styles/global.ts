import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: wheat;
  }
`;

export default GlobalStyle;
