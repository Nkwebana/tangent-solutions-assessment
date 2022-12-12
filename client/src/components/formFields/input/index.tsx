/**
 *
 * TextInput
 *
 */

import React, { FC, useEffect } from 'react';
import { useController } from 'react-hook-form';
import { FormField } from '../../../interfaces';
import {
  StyledInput,
  StyledInputWrapper,
  StyledInputLabel,
  StyledErrorIndicator,
} from './styledComponents';

const Input: FC<FormField> = (props) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const { label, placeholder, type } = props;

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput {...field} placeholder={placeholder} type={type} />
      {error && error?.message === 'required' && (
        <StyledErrorIndicator>This field is required</StyledErrorIndicator>
      )}
      {error && error?.type === 'validate' && (
        <StyledErrorIndicator>{error.message}</StyledErrorIndicator>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
