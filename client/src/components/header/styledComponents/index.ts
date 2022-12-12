import styled from 'styled-components';
import { calculateRem } from '../../../utils';

const StyledHeader = styled.div`
  margin-bottom: ${calculateRem(50)};
  padding: 0 ${calculateRem(50)};

  h1 {
    font-size: ${calculateRem(50)};
    margin: 0;
  }

  p {
    margin-top: ${calculateRem(10)};
    font-family: ${({
      theme: {
        fonts: { spartanRegular },
      },
    }) => spartanRegular};
    font-size: ${calculateRem(20)};
  }
`;

const StyledHeaderInner = styled.div`
  max-width: ${calculateRem(1440)};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitleWrapper = styled.div``;

const StyledActionsWrapper = styled.div`
  display: flex;

  align-items: center;
`;

const StyledButtonIconWrapper = styled.div`
  width: ${calculateRem(30)};
  height: ${calculateRem(30)};
  background-color: ${({
    theme: {
      colors: { light },
    },
  }) => light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  StyledHeader,
  StyledTitleWrapper,
  StyledActionsWrapper,
  StyledButtonIconWrapper,
  StyledHeaderInner,
};
