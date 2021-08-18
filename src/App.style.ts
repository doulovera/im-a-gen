import styled, { createGlobalStyle } from "styled-components";
import Wave from "./assets/images/wave.svg";
import Twitter from "./assets/images/twitter.svg";
import Drop from "./assets/images/drop.svg";
import Blur from "./assets/images/blur.svg";
import Eye from "./assets/images/eye.svg";
import External from "./assets/images/external.svg";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #eaeaec;
    --bg-secondary: #fff;
    --gray-secondary: #272b2f;
    --blue-primary: #0554d7;
    --blue-secondary: #5D9AFB;
    --input-border-radius: 10px;
  }

  * {
    padding: 0;
    margin: 0;
  }

  html {
    background-color: #20204c;
    background-image: url(${Wave});
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
    background-position: bottom;
    min-height: 100vh;
  }
  
  body {
    position: relative;
    min-width: 320px;
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    color: #000;
  }

  a {
    text-decoration: none;
    color: var(--blue-primary);
  }
  
  a:hover {
    text-decoration: underline;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }

  i.twitter {
    padding: 10px 14px;
    background-image: url(${Twitter});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
  }
  i.blur-icon {
    padding: 10px 14px;
    background-image: url(${Blur});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
  }
  i.drop-icon {
    padding: 10px;
    background-image: url(${Drop});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  i.eye-icon {
    padding: 6px 13px;
    background-image: url(${Eye});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  i.external-icon {
    padding: 1px 12px;
    background-image: url(${External});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const AppDiv = styled.div`
  display: block;
  min-width: 300px;
  max-width: 750px;
  min-height: 550px;
  height: auto;
  margin: 50px auto;
  background-color: var(--bg-primary);
  border-radius: 15px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
