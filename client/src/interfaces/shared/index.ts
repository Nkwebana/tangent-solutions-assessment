import { AxiosRequestConfig } from 'axios';
import { UseControllerProps, Control } from 'react-hook-form';
import { FormFieldType, SeniorityRating } from '../../enums';

interface ApiCall extends AxiosRequestConfig {
  callBack?: () => void;
}

interface ApiResponse {
  ok: boolean;
  result: any;
  error: Error | undefined;
}

interface Employee {
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  dateOfBirth: Date;
  streetAddress: string;
  city: string;
  postalCode: number;
  country: string;
}

interface FormField extends UseControllerProps {
  placeholder?: string;
  label: string;
  type: FormFieldType;
  control: Control<any>;
  defaultValue?: string;
  onTextChange?: (value: string) => void;
}

interface SkillIndex {
  [key: number]: Skill;
}

interface Skill {
  name: string;
  yearsExp: number;
  seniorityRating: SeniorityRating;
}

export type { ApiResponse, ApiCall, Employee, FormField, Skill, SkillIndex };
