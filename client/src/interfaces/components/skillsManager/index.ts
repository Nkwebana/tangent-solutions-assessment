import { Control, UseFormRegister } from 'react-hook-form';
import { ObjectKeys } from 'react-hook-form/dist/types/path/common';
import { SkillFormInput } from '../../../enums';
import { Skill } from '../../shared';
import { FormInputs } from '../form';

interface NewSkill {
  value: string | number;
  skillToEditIndex: number;
  fieldName: keyof Skill;
}

interface SkillsManagerProps {
  control: Control<FormInputs, any>;
  register: UseFormRegister<FormInputs>;
  // onSkillAdd: () => void;
  // skills: Skill[];
  // onSkillChange: (onChangeValue: NewSkill) => void;
  // onSkillDelete: (skillToBeDeletedIndex: number) => void;
}

export type { SkillsManagerProps, NewSkill };
