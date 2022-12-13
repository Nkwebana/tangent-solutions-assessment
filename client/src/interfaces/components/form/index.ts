import { IEmployee } from '../../shared';

interface FormInputs extends IEmployee {}

interface FormProps {
  onSubmit: (formValues: FormInputs) => void;
  defaultValues?: FormInputs;
}

export type { FormProps, FormInputs };
