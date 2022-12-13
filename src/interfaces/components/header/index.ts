import { FilterOption } from '../filter';

interface HeaderProps {
  numberOfEmployees: number;
  onFilterChanged: (selectedOption: FilterOption) => void;
  onNewEmployee: () => void;
  onSearch: (searchValue: string) => void;
  filterOptions: FilterOption[];
}

export type { HeaderProps };
