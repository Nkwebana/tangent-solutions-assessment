/**
 *
 * Employee
 *
 */

import React from 'react';
import { EmployeeProps } from '../../interfaces';
import {
  StyledEmployee,
  StyledLabel,
  StyledCounter,
  StyledEmployeeWrapper,
  StyledDeleteAction,
} from './styledComponents';
import { ReactComponent as DeleteIcon } from '../../assets/svg/icon-delete.svg';

function Employee({
  employee: { firstName, lastName, contactNumber, id, emailAddress },
  employeeIndex,
  onEmployeeSelect,
  onEmployeeDelete,
}: EmployeeProps): JSX.Element {
  return (
    <StyledEmployeeWrapper>
      <StyledEmployee onClick={() => onEmployeeSelect(id)}>
        <StyledCounter>{employeeIndex + 1}</StyledCounter>
        <StyledLabel>{firstName}</StyledLabel>
        <StyledLabel>{lastName}</StyledLabel>
        <StyledLabel>{contactNumber}</StyledLabel>
        <StyledLabel>{emailAddress}</StyledLabel>
      </StyledEmployee>
      <StyledDeleteAction onClick={() => onEmployeeDelete(id, firstName)}>
        <DeleteIcon />
      </StyledDeleteAction>
    </StyledEmployeeWrapper>
  );
}

export default Employee;
