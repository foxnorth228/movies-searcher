import { createGlobalStyle, styled } from 'styled-components';

export const globalStyle = createGlobalStyle`
  :root {
    --background: white;
    --text: black;
    --footer-title: #8a8a8a;
    --searcher-background: #e8e8e8;
    --button-show-more-hover: #dc7700;
    --button-show-more-active: #5b2e00;
    --selector-genre-border: #cfcfcf;
    --selector-genre: #f0f0f0;
    --selector-genre-hover: #d8d8d8;
    --selector-genre-text: black;
    --selector-genre-selected: black;
    --selector-genre-selected-text: white;
    --card-box-shadow: #6b6b6b;
  }

  .light-theme {
    --background: white;
    --text: black;
    --footer-title: #8a8a8a;
    --searcher-background: #f5f5f5;
    --button-show-more-hover: #dc7700;
    --button-show-more-active: #5b2e00;
    --selector-genre-border: #cfcfcf;
    --selector-genre: #f0f0f0;
    --selector-genre-hover: #d8d8d8;
    --selector-genre-text: black;
    --selector-genre-selected: black;
    --selector-genre-selected-text: white;
    --card-box-shadow: #6b6b6b;
  }

  .dark-theme {
    --background: black;
    --text: white;
    --footer-title: #c2c2c2;
    --searcher-background: #cccccc;
    --button-show-more-hover: #be6600;
    --button-show-more-active: #3d1d00;
    --selector-genre-border: #d7d7d7;
    --selector-genre: #f0f0f0;
    --selector-genre-hover: #c0c0c0;
    --selector-genre-text: black;
    --selector-genre-selected: #131313;
    --selector-genre-selected-text: white;
    --card-box-shadow: #ffffff;
  }
  
  body {
    background: var(--background, white);
  }

  label, span, p, div, h1, h2, h3, h4, h5, h6 {
    color: var(--text);
  }

  *,
  :after,
  :before {
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

  body {
    margin: 0;
  }

  :root {
    box-sizing: border-box;
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
  }
`;
