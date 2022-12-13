/**
 *
 * Header
 *
 */

import React from 'react';
import { HeaderProps } from '../../interfaces';
import Filter from '../filter';
import Button from '../button';
import { ButtonVariant } from '../../enums';
import {
  StyledHeader,
  StyledTitleWrapper,
  StyledActionsWrapper,
  StyledHeaderInner,
} from './styledComponents';
import { StyledButtonIconWrapper } from '../../theme/global-styles';
import { ReactComponent as PlusIcon } from '../../assets/svg/icon-plus.svg';
import SearchInput from '../searchInput';

function Header({
  numberOfEmployees,
  onFilterChanged,
  filterOptions,
  onNewEmployee,
  onSearch,
}: HeaderProps): JSX.Element {
  const formatNumberOfEmployeeLabel = () => {
    switch (numberOfEmployees) {
      case 0:
        return 'No employees';
      case 1:
        return `There is 1 employee`;
      default:
        return `There are ${numberOfEmployees} employees`;
    }
  };

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledTitleWrapper>
          <h1>Employees</h1>
          <p>{formatNumberOfEmployeeLabel()}</p>
        </StyledTitleWrapper>
        <SearchInput onSearch={(searchValue) => onSearch(searchValue)} />
        <StyledActionsWrapper>
          <Filter
            onFilterChange={onFilterChanged}
            filterOptions={filterOptions}
          />
          <Button
            onClick={onNewEmployee}
            title="New employee"
            variant={ButtonVariant.PrimaryAction}
            icon={
              <StyledButtonIconWrapper>
                <PlusIcon />
              </StyledButtonIconWrapper>
            }
          />
        </StyledActionsWrapper>
      </StyledHeaderInner>
    </StyledHeader>
  );
}

export default Header;
