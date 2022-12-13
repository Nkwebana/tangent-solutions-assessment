import { Control, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../form';

interface SkillsManagerProps {
  control: Control<FormInputs, any>;
  register: UseFormRegister<FormInputs>;
}

export type { SkillsManagerProps };
