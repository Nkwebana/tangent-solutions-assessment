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
  StyledButtonIconWrapper,
  StyledHeaderInner,
} from './styledComponents';
import { ReactComponent as PlusIcon } from '../../assets/svg/icon-plus.svg';

function Header({
  numberOfApplicants,
  onFilterChanged,
  filterOptions,
  onNewApplicant,
}: HeaderProps): JSX.Element {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledTitleWrapper>
          <h1>Employee</h1>
          <p>{`There are ${numberOfApplicants}  employees`}</p>
        </StyledTitleWrapper>
        <StyledActionsWrapper>
          <Filter
            onFilterChange={onFilterChanged}
            filterOptions={filterOptions}
          />
          <Button
            onClick={onNewApplicant}
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
