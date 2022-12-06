import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { calculateRem } from '../utils';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({
      theme: {
        colors: { light },
      },
    }) => light};
    font-family: ${({
      theme: {
        fonts: { spartanRegular },
      },
    }) => spartanRegular};
    background-color:${({
      theme: {
        colors: { secondaryFour },
      },
    }) => secondaryFour} ;
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    font-weight: 300;
  }
  `;

const StyledApplicationWrapper = styled.div`
  max-width: ${calculateRem(1440)};
  height: 100%;
  margin: auto;
  padding: ${calculateRem(15)};
`;

export { GlobalStyles, StyledApplicationWrapper };
