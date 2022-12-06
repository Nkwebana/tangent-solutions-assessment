import { AxiosRequestConfig } from 'axios';

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
  skill: string;
  yrsExp: string;
  seniorityRating: string;
}

export type { ApiResponse, ApiCall, Employee };
