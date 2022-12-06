import { createStore, action } from 'easy-peasy';
import { StoreModel, Employee } from '../interfaces';

const store = createStore<StoreModel>({
  employeeManagement: {
    employee: undefined,
    addEmployee: action((state, payload: Employee) => {
      state.employee = payload;
    }),
  },
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
