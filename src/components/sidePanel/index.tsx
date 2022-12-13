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
    employeeManagement: { setActiveEmployee, addEmployee, editEmployee },
  } = useStoreActions((actions) => actions);

  const isHydrated = useStoreRehydrated();

  const handleFormSubmit = (employee: FormInputs) => {
    toggle();
    setActiveEmployee(undefined);

    if (employee.id) {
      return editEmployee(employee);
    }

    employee.id = generateUniqueId();
    addEmployee(employee);
  };

  return isOpen && isHydrated ? (
    <StyledSidePanel isSidePanelOpen={isOpen}>
      <Form onSubmit={handleFormSubmit} defaultValues={activeEmployee} />
    </StyledSidePanel>
  ) : (
    <></>
  );
}

export default SidePanel;
