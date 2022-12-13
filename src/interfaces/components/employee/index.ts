import { IEmployee } from '../../shared';

interface EmployeeProps {
  employee: IEmployee;
  onEmployeeSelect: (id: string) => void;
  onEmployeeDelete: (id: string, firstName: string) => void;
  employeeIndex: number;
}

export type { EmployeeProps };
