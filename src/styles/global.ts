import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
     &::after {
       box-sizing: inherit;
     }
  }

  html, body, #__next {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system,  sans-serif;
    font-size: 16px;
  }
  :focus {
    outline: none
  }
`

export default GlobalStyles
