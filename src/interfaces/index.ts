import {
  ApiCall,
  ApiResponse,
  IEmployee,
  FormField,
  Skill,
  SkillIndex,
} from './shared';
import { HeaderProps } from './components/header';
import {
  FilterProps,
  FilterOption,
  StyledOptionsWrapperProps,
} from './components/filter';
import { ButtonProps, StyledButtonProps } from './components/button';
import { SidePanelProps, StyledSidePanelProps } from './components/sidePanel';
import { StoreModel } from './store';
import { FormProps, FormInputs } from './components/form';
import { SkillsManagerProps } from './components/skillsManager';
import { EmployeeProps } from './components/employee';
import { SearchInputProps } from './components/searchInput';
import { ModalProps, StyledModalProps, ModalConfig } from './components/modal';

export type {
  EmployeeProps,
  ModalProps,
  StyledModalProps,
  ModalConfig,
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
  StyledOptionsWrapperProps,
  FilterOption,
  IEmployee,
  StoreModel,
  SidePanelProps,
  StyledSidePanelProps,
  Skill,
  SkillIndex,
  SearchInputProps,
};
