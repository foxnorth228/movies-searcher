import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const globalStyle = createGlobalStyle<DefaultTheme>`
  :root {
    box-sizing: border-box;
  }
  
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
  }
  
  body {
    margin: 0;
    background: ${(props) => props.theme.colors.background}
  }

  label, span, p, div, h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.text}
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
    transition: color 0.3s linear, background-color 0.3s linear;
  }
  
  html {
    font-size: 20px;
  }

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    html {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 991px) {
    html {
      font-size: 17px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 600px) {
    html {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    html {
      font-size: 15px;
    }
  }
`;
