import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: hsla(331, 78%, 69%, 1);
    background: linear-gradient(
      90deg,
      hsla(331, 78%, 69%, 1) 0%,
      hsla(238, 82%, 70%, 1) 100%
    );

    background: -moz-linear-gradient(
      90deg,
      hsla(331, 78%, 69%, 1) 0%,
      hsla(238, 82%, 70%, 1) 100%
    );

    background: -webkit-linear-gradient(
      90deg,
      hsla(331, 78%, 69%, 1) 0%,
      hsla(238, 82%, 70%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ED71AD", endColorstr="#7277F1", GradientType=1 );
  }
`
