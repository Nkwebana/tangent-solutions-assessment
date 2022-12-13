import { createStore, action, persist } from 'easy-peasy';
import { StoreModel, IEmployee } from '../interfaces';

const store = createStore<StoreModel>({
  employeeManagement: persist({
    employees: [],
    activeEmployee: undefined,
    setActiveEmployee: action((state, payload: IEmployee) => {
      state.activeEmployee = payload;
    }),
    addEmployee: action((state, payload: IEmployee) => {
      state.employees.push(payload);
    }),
    editEmployee: action((state, employee: IEmployee) => {
      const employeeToEditIndex = state.employees.findIndex(
        ({ id }) => id === employee.id
      );

      if (employeeToEditIndex > -1) {
        state.employees[employeeToEditIndex] = employee;
      }
    }),
  }),
  ui: {
    sideBar: {
      isOpen: false,
      toggle: action((state) => {
        state.isOpen = !state.isOpen;
      }),
    },
  },
});

export { store };
