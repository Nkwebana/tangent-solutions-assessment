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
