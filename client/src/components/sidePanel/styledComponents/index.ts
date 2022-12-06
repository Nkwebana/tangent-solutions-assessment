import styled from 'styled-components';
import { calculateRem } from '../../../utils';
import { StyledSidePanelProps } from '../../../interfaces';

const StyledSidePanel = styled.div<StyledSidePanelProps>`
  width: ${calculateRem(550)};
  position: fixed;
  left: ${({ isSidePanelOpen }) =>
    isSidePanelOpen ? 0 : `-${calculateRem(550)}`};
  height: 100vh;
  top: 0;
  z-index: 999;
  background-color: ${({
    theme: {
      colors: { mainBackgroundColor },
    },
  }) => mainBackgroundColor};
  transition: 0.3s all 0.1s ease-in-out;
`;

export { StyledSidePanel };
