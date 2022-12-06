/**
 *
 * Applicants
 *
 */
import React from 'react';
import { useStoreActions } from '../../hooks';
import { StyledApplicationWrapper } from '../../theme/global-styles';
import Header from '../../components/header';

function Applicants(): JSX.Element {
  const {
    ui: {
      sideBar: { toggle },
    },
  } = useStoreActions((actions) => actions);
  return (
    <StyledApplicationWrapper>
      <Header
        numberOfApplicants={0}
        onFilterChanged={() => {}}
        onNewApplicant={() => toggle()}
        filterOptions={[]}
      />
    </StyledApplicationWrapper>
  );
}

export default Applicants;
