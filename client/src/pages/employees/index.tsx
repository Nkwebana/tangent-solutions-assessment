/**
 *
 * Employees
 *
 */
import React, { useEffect } from 'react';
import { useStoreRehydrated } from 'easy-peasy';
import { useStoreActions, useStoreState } from '../../hooks';
import { StyledApplicationWrapper } from '../../theme/global-styles';
import Header from '../../components/header';
import Employee from '../../components/employee';

function Employees(): JSX.Element {
  const {
    ui: {
      sideBar: { toggle },
    },
    employeeManagement: { setActiveEmployee },
  } = useStoreActions((actions) => actions);
  const {
    employeeManagement: { employees },
  } = useStoreState((state) => state);

  const isHydrated = useStoreRehydrated();

  const onEmployeeEdit = (employeeId: string) => {
    const activeEmployee = employees.find(({ id }) => id === employeeId);

    if (activeEmployee) {
      setActiveEmployee(activeEmployee);
      toggle();
    }
  };
  return (
    <StyledApplicationWrapper>
      <Header
        numberOfEmployees={employees.length}
        onFilterChanged={() => {}}
        onNewEmployee={() => toggle()}
        filterOptions={[]}
      />
      {isHydrated
        ? employees.map((employee, index) => (
            <Employee
              employee={employee}
              onEmployeeSelect={onEmployeeEdit}
              employeeIndex={index}
            />
          ))
        : null}
    </StyledApplicationWrapper>
  );
}

export default Employees;
