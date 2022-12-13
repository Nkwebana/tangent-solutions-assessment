import {
  ApiCall,
  ApiResponse,
  IEmployee,
  FormField,
  Skill,
  SkillIndex,
} from './shared';
import { HeaderProps } from './components/header';
import { FilterProps, FilterOption } from './components/filter';
import { ButtonProps, StyledButtonProps } from './components/button';
import { SidePanelProps, StyledSidePanelProps } from './components/sidePanel';
import { StoreModel } from './store';
import { FormProps, FormInputs } from './components/form';
import { SkillsManagerProps, NewSkill } from './components/skillsManager';
import { EmployeeProps } from './components/employee';

export type {
  EmployeeProps,
  SkillsManagerProps,
  FormProps,
  FormField,
  FormInputs,
  ButtonProps,
  FilterProps,
  HeaderProps,
  ApiCall,
  ApiResponse,
  StyledButtonProps,
  FilterOption,
  IEmployee,
  StoreModel,
  SidePanelProps,
  StyledSidePanelProps,
  Skill,
  SkillIndex,
  NewSkill,
};
