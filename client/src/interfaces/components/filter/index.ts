interface FilterOption {
  id: number;
  title: string;
}

interface FilterProps {
  onFilterChange: Function;
  filterOptions: FilterOption[];
}

export type { FilterProps, FilterOption };
