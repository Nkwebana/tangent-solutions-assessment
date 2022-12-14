/**
 *
 * Form
 *
 */

import React, { MouseEvent } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormProps, FormInputs } from '../../interfaces';
import { useStoreActions } from '../../hooks';
import { FormFieldType, ButtonVariant } from '../../enums';
import Input from '../formFields/input';
import Button from '../button';
import SkillsManager from '../skillsManager';
import {
  StyledForm,
  StyledInlineFieldWrapper,
  StyledActionsWrapper,
  StyledPositiveActionsWrapper,
} from './styledComponents';
import { StyledButtonIconWrapper } from '../../theme/global-styles';
import { ReactComponent as PlusIcon } from '../../assets/svg/icon-plus.svg';
import { emailValidation } from '../../utils/formValidation';

function Form({ onSubmit, defaultValues }: FormProps): JSX.Element {
  const { handleSubmit, control, reset, register } = useForm<FormInputs>({
    defaultValues,
    mode: 'all',
  });
  const methods = useForm();

  const {
    ui: {
      sideBar: { toggle },
    },
  } = useStoreActions((actions) => actions);

  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => onSubmit(data);

  const onCancel = (event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    toggle();
    reset();
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>New Employee</h1>
        <section>
          <p>Basic Info</p>
          <StyledInlineFieldWrapper>
            <Input
              name="firstName"
              control={control}
              rules={{ required: true }}
              label="First Name"
              type={FormFieldType.Text}
            />
            <Input
              name="lastName"
              control={control}
              label="Last Name"
              type={FormFieldType.Text}
              rules={{ required: true }}
            />
          </StyledInlineFieldWrapper>
          <Input
            name="contactNumber"
            control={control}
            rules={{
              required: true,
            }}
            label="Contact Number"
            type={FormFieldType.Text}
          />
          <Input
            name="emailAddress"
            control={control}
            rules={{
              validate: (email: string) => emailValidation(email),
            }}
            label="Email Address"
            type={FormFieldType.Text}
          />
          <StyledInlineFieldWrapper>
            <Input
              name="dateOfBirth"
              control={control}
              rules={{ required: true }}
              label="Date Of Birth"
              type={FormFieldType.Date}
            />
          </StyledInlineFieldWrapper>
        </section>
        <section>
          <p>Address Info</p>
          <Input
            name="streetAddress"
            control={control}
            rules={{ required: true }}
            label="Street Address"
            type={FormFieldType.Text}
          />
          <StyledInlineFieldWrapper>
            <Input
              name="city"
              control={control}
              rules={{ required: true }}
              label="City"
              type={FormFieldType.Text}
            />
            <Input
              name="postCode"
              control={control}
              rules={{ required: true }}
              label="Postal Code"
              type={FormFieldType.Number}
            />
            <Input
              name="country"
              control={control}
              rules={{ required: true }}
              label="Country"
              type={FormFieldType.Text}
            />
          </StyledInlineFieldWrapper>
        </section>
        <section>
          <p>Skills</p>
          <SkillsManager control={control} register={register} />
          <StyledActionsWrapper>
            <Button
              title="Cancel"
              onClick={(event) => onCancel(event)}
              variant={ButtonVariant.NegativeAction}
            />
            <StyledPositiveActionsWrapper>
              <Button
                title="Save and Add Employee"
                type="submit"
                onClick={() => {}}
                variant={ButtonVariant.PrimaryAction}
                icon={
                  <StyledButtonIconWrapper>
                    <PlusIcon />
                  </StyledButtonIconWrapper>
                }
              />
            </StyledPositiveActionsWrapper>
          </StyledActionsWrapper>
        </section>
      </StyledForm>
    </FormProvider>
  );
}

export default Form;
