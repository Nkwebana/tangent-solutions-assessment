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

function Header({
  numberOfEmployees,
  onFilterChanged,
  filterOptions,
  onNewEmployee,
}: HeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledTitleWrapper>
          <h1>Employee</h1>
          <p>{`There are ${numberOfEmployees}  employees`}</p>
        </StyledTitleWrapper>
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
