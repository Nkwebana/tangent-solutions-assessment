import { FilterOption } from '../filter';

interface HeaderProps {
  numberOfApplicants: number;
  onFilterChanged: () => void;
  onNewApplicant: () => void;
  filterOptions: FilterOption[];
}

export type { HeaderProps };
