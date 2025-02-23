
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export default GlobalStyle;
