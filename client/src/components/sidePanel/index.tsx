/**
 *
 * SidePanel
 *
 */

import React, { useEffect } from 'react';
import { useStoreState } from '../../hooks';
import { FormInputs, SidePanelProps } from '../../interfaces';
import { StyledSidePanel } from './styledComponents';
import Form from '../form';

function SidePanel(_props: SidePanelProps): JSX.Element {
  const {
    ui: {
      sideBar: { isOpen },
    },
  } = useStoreState((state) => state);

  const handleFormSubmit = (values: FormInputs) => {
    // send to BE
  };

  return (
    <StyledSidePanel isSidePanelOpen={isOpen}>
      <Form onSubmit={handleFormSubmit} />
    </StyledSidePanel>
  );
}

export default SidePanel;
