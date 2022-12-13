/**
 *
 * SearchInput
 *
 */
import React from 'react';
import { SearchInputProps } from '../../interfaces';
import {
  StyledSearchInput,
  StyledSearchInputContainer,
} from './styledComponents';

function SearchInput({ onSearch }: SearchInputProps): JSX.Element {
  return (
    <StyledSearchInputContainer>
      <StyledSearchInput
        placeholder="Search by name, surname or email"
        onChange={(searchValue) => onSearch(searchValue.target.value)}
      />
    </StyledSearchInputContainer>
  );
}

export default SearchInput;
