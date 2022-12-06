import { Action } from 'easy-peasy';
import { Employee } from '..';

interface IEmployeeManagement {
  employee: Employee | undefined;
  addEmployee: Action<IEmployeeManagement, Employee>;
}

interface ISideBar {
  isOpen: boolean;
  toggle: Action<ISideBar>;
}

interface IUi {
  sideBar: ISideBar;
}

interface StoreModel {
  employeeManagement: IEmployeeManagement;
  ui: IUi;
}

export type { StoreModel };
