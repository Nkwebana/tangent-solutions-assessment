/**
 *
 * Filter
 *
 */

import React, { useState } from 'react';
import { FilterProps } from '../../interfaces';
import {
  StyledFilter,
  StyledArrowDown,
  StyledOptionsWrapper,
  StyledOption,
} from './styledComponents';

function Filter({
  onFilterChange,
  filterOptions = [],
}: FilterProps): JSX.Element {
  const [activeFilterOptionIndex, setActiveFilterIndex] = useState<number>(0);
  return (
    <StyledFilter>
      <h2>Filter by</h2>
      <StyledArrowDown />
      <StyledOptionsWrapper>
        {filterOptions.map(({ title, id }) => (
          <StyledOption key={id}>{title}</StyledOption>
        ))}
      </StyledOptionsWrapper>
    </StyledFilter>
  );
}

export default Filter;
