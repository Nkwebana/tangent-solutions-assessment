import { FilterKeys } from '../../../enums';

const filterOptions = [
  {
    id: 0,
    title: FilterKeys.SortBy, // reset filter
  },
  {
    id: 1,
    title: FilterKeys.DateOfBirthAsc, // youngest to oldest
  },
  {
    id: 2,
    title: FilterKeys.DateOfBirthDesc, // oldest to youngest
  },
  {
    id: 3,
    title: FilterKeys.YearsOfExpAsc, // most senior to junior
  },
  {
    id: 4,
    title: FilterKeys.YearsOfExpDesc, // most junior to senior
  },
];

export { filterOptions };
