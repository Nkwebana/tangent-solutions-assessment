import styled from 'styled-components';
import { calculateRem } from '../../../utils';
const StyledEmployee = styled.a`
  background-color: ${({
    theme: {
      colors: { gray },
    },
  }) => gray};
  border-radius: ${calculateRem(10)};
  padding: ${calculateRem(10)};
  display: flex;
  align-items: center;
  margin: 0 auto ${calculateRem(10)} auto;
  max-width: ${calculateRem(1440)};
`;

const StyledLabel = styled.h2`
  font-size: ${calculateRem(18)};
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  margin-right: ${calculateRem(15)};
`;

const StyledCounter = styled.p`
  color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  width: ${calculateRem(25)};
  height: ${calculateRem(25)};
  line-height: ${calculateRem(25)};
  border-radius: 100%;
  text-align: center;
  font-size: ${calculateRem(18)};
  margin-right: ${calculateRem(15)};
  border: ${({
    theme: {
      colors: { primary },
    },
  }) => `1px solid ${primary}`};
`;

export { StyledEmployee, StyledLabel, StyledCounter };
