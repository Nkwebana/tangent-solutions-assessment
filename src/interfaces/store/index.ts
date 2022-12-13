import { Action } from 'easy-peasy';
import { IEmployee } from '..';

interface IEmployeeManagement {
  employees: IEmployee[];
  activeEmployee?: IEmployee;
  setActiveEmployee: Action<IEmployeeManagement, IEmployee | undefined>;
  addEmployee: Action<IEmployeeManagement, IEmployee>;
  editEmployee: Action<IEmployeeManagement, IEmployee>;
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
