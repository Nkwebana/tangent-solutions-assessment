import styled from 'styled-components';
import { calculateRem } from '../../../utils';

const StyledFilter = styled.a`
  display: block;
  margin-right: ${calculateRem(50)};
  transition: 0.3s all 0.1s ease-in-out;
  h2 {
    float: left;
  }

  &:hover {
    i {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      margin-top: ${calculateRem(7)};
    }
  }
`;

const StyledArrowDown = styled.i`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-left: ${calculateRem(20)};
  margin-top: ${calculateRem(3)};
`;

const StyledOptionsWrapper = styled.div`
  display: none;
`;
const StyledOption = styled.a`
  display: block;
`;

export { StyledFilter, StyledArrowDown, StyledOptionsWrapper, StyledOption };
