import styled from 'styled-components';
import { calculateRem } from '../../../utils';

const StyledSkillsManager = styled.div`
  h2 {
    color: ${({
      theme: {
        colors: { secondary },
      },
    }) => secondary};
    margin-bottom: ${calculateRem(20)};
  }

  button {
    width: 100%;
  }

  margin-bottom: ${calculateRem(30)};
`;

const StyledSkillsTable = styled.table`
  width: 100%;
  border-spacing: ${calculateRem(20)};
  width: calc(100% + ${calculateRem(40)});
  margin-left: -${calculateRem(20)};
  border-collapse: separate;
  th {
    text-align: left;
    font-size: ${calculateRem(20)};
    font-weight: 500;
  }

  > tr {
    margin-bottom: ${calculateRem(40)};
  }
`;

const StyledRow = styled.tr``;

const StyledHeadingItem = styled.p``;

const StyledSkillNameWrapper = styled.div``;

export {
  StyledSkillsManager,
  StyledRow,
  StyledHeadingItem,
  StyledSkillNameWrapper,
  StyledSkillsTable,
};
