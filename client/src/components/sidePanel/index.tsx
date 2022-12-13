/**
 *
 * SidePanel
 *
 */

import React, { useEffect } from 'react';
import { useStoreRehydrated } from 'easy-peasy';
import { useStoreState, useStoreActions } from '../../hooks';
import { FormInputs, SidePanelProps } from '../../interfaces';
import { StyledSidePanel } from './styledComponents';
import Form from '../form';
import { generateUniqueId } from '../../utils';

function SidePanel(_props: SidePanelProps): JSX.Element {
  const {
    ui: {
      sideBar: { isOpen },
    },
    employeeManagement: { activeEmployee },
  } = useStoreState((state) => state);

  const {
    ui: {
      sideBar: { toggle },
    },
    employeeManagement: { setActiveEmployee, addEmployee },
  } = useStoreActions((actions) => actions);

  const isHydrated = useStoreRehydrated();

  const handleFormSubmit = (employee: FormInputs) => {
    if (!employee.id) {
      employee.id = generateUniqueId();
    }
    // send to BE
    toggle();
    addEmployee(employee);
    setActiveEmployee(undefined);
  };

  return (
    <StyledSidePanel isSidePanelOpen={isOpen}>
      {isHydrated ? (
        <Form onSubmit={handleFormSubmit} defaultValues={activeEmployee} />
      ) : null}
    </StyledSidePanel>
  );
}

export default SidePanel;
