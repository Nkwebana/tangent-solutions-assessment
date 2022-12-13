/**
 *
 * Employee
 *
 */

import React from 'react';
import { EmployeeProps } from '../../interfaces';
import { StyledEmployee, StyledLabel, StyledCounter } from './styledComponents';

function Employee({
  employee: { firstName, lastName, contactNumber, id },
  employeeIndex,
  onEmployeeSelect,
}: EmployeeProps): JSX.Element {
  return (
    <StyledEmployee onClick={() => onEmployeeSelect(id)}>
      <StyledCounter>{employeeIndex}</StyledCounter>
      <StyledLabel>{firstName}</StyledLabel>
      <StyledLabel>{lastName}</StyledLabel>
      <StyledLabel>{contactNumber}</StyledLabel>
    </StyledEmployee>
  );
}

export default Employee;
