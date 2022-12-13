import { FilterOption } from '../filter';

interface HeaderProps {
  numberOfEmployees: number;
  onFilterChanged: () => void;
  onNewEmployee: () => void;
  filterOptions: FilterOption[];
}

export type { HeaderProps };
