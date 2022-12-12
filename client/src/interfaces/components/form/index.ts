import { Employee, Skill } from '../../shared';

interface FormInputs extends Employee {
  skills: Skill[];
}

interface FormProps {
  onSubmit: (formValues: FormInputs) => void;
  initialValues?: FormInputs;
}

export type { FormProps, FormInputs };
