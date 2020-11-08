import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    outline: none;
  }

  html, body {
    -webkit-font-smoothing: antialiased !important;
    font: 400 16px 'Roboto', sans-serif;
  }

  /* APEXCHART TOOLTIP */
  .apexcharts-tooltip {
    color: #2d315d;
  }

  /* CUSTOM SCROLLBAR */
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #2d315d;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #7333d7;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #5080ff;
  }
`;

export default GlobalStyles;
