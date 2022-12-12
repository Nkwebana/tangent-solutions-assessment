import { Employee } from '../../shared';

interface FormInputs extends Employee {}

interface FormProps {
  onSubmit: (formValues: FormInputs) => void;
  initialValues?: FormInputs;
}

export type { FormProps, FormInputs };
