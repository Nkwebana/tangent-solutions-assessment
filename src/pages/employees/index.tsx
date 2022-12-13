/**
 *
 * Employees
 *
 */
import React, { useEffect, useState } from 'react';
import { useStoreRehydrated } from 'easy-peasy';
import { useStoreActions, useStoreState } from '../../hooks';
import { FilterKeys, ButtonVariant } from '../../enums';
import { filterOptions } from './mockData';
import {
  StyledApplicationWrapper,
  StyledEmptyStateImageWrapper,
} from '../../theme/global-styles';
import Header from '../../components/header';
import Employee from '../../components/employee';
import { FilterOption, IEmployee } from '../../interfaces';
import { emptyStateIcon } from '../../assets';

function Employees(): JSX.Element {
  const {
    ui: {
      sideBar: { toggle },
      modal: { hideModal, showModal },
    },
    employeeManagement: { setActiveEmployee, deleteEmployee },
  } = useStoreActions((actions) => actions);
  const {
    employeeManagement: { employees },
  } = useStoreState((state) => state);

  const [currentEmployees, setCurrentEmployees] =
    useState<IEmployee[]>(employees);

  const isHydrated = useStoreRehydrated();

  const onEmployeeExpand = (employeeId: string) => {
    const activeEmployee = employees.find(({ id }) => id === employeeId);

    if (activeEmployee) {
      setActiveEmployee(activeEmployee);
      toggle();
    }
  };

  const resetSort = () => setCurrentEmployees(employees);

  const sortByDOBAscending = () => {
    const youngestToOldest = employees.sort(
      (employeeA, employeeB) =>
        +new Date(employeeB.dateOfBirth) - +new Date(employeeA.dateOfBirth)
    );

    setCurrentEmployees(youngestToOldest);
  };

  const sortByDOBDescending = () => {
    const oldestToYoungest = employees.sort(
      (employeeB, employeeA) =>
        +new Date(employeeA.dateOfBirth) - +new Date(employeeB.dateOfBirth)
    );

    setCurrentEmployees(oldestToYoungest);
  };

  const addEmployeesTotalNumberOFExp = () =>
    employees.map((employee) => {
      return {
        ...employee,
        totalNumberOfExp: employee.skills.reduce(
          (partialSum, a) => partialSum + Number(a.yearsExp),
          0
        ),
      };
    });

  const sortByYearsOfExpAscending = () => {
    const employeesWithTotalNumberOfExp = addEmployeesTotalNumberOFExp();

    const lowestToHighest: IEmployee[] = employeesWithTotalNumberOfExp.sort(
      (employeeA, employeeB) =>
        employeeA.totalNumberOfExp - employeeB.totalNumberOfExp
    );

    setCurrentEmployees(lowestToHighest);
  };

  const sortByYearsOfExpDescending = () => {
    const employeesWithTotalNumberOfExp = addEmployeesTotalNumberOFExp();

    const lowestToHighest: IEmployee[] = employeesWithTotalNumberOfExp.sort(
      (employeeB, employeeA) =>
        employeeA.totalNumberOfExp - employeeB.totalNumberOfExp
    );

    setCurrentEmployees(lowestToHighest);
  };

  const handleEmployeeFilter = ({ title }: FilterOption) => {
    switch (title) {
      case FilterKeys.SortBy:
        return resetSort();
      case FilterKeys.DateOfBirthAsc:
        return sortByDOBAscending();
      case FilterKeys.DateOfBirthDesc:
        return sortByDOBDescending();
      case FilterKeys.YearsOfExpAsc:
        return sortByYearsOfExpAscending();
      case FilterKeys.YearsOfExpDesc:
        return sortByYearsOfExpDescending();
      default:
        break;
    }
  };

  const onSearch = (searchValue: string) => {
    const term = searchValue.toLowerCase();
    const filteredEmployees = employees.filter(
      ({ firstName, lastName, emailAddress }) =>
        firstName.toLowerCase().includes(term) ||
        lastName.toLowerCase().includes(term) ||
        emailAddress.toLowerCase().includes(term)
    );

    setCurrentEmployees(filteredEmployees);
  };

  const onNewEmployee = () => {
    setActiveEmployee(undefined);
    toggle();
  };

  const handleInvoiceDelete = (employeeID: string) =>
    deleteEmployee(employeeID);

  const handleConfirmDelete = (employeeId: string, employeeName: string) =>
    showModal({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete employee: ${employeeName}? This action cannot be undone`,
      primaryAction: () => {
        handleInvoiceDelete(employeeId);
        hideModal();
      },
      secondaryAction: () => hideModal(),
      primaryActionVariant: ButtonVariant.DeleteAction,
      secondaryActionVariant: ButtonVariant.SecondaryAction,
      primaryActionTitle: 'Delete',
      secondaryActionTitle: 'Cancel',
    });

  useEffect(() => {
    setCurrentEmployees(employees);
  }, [employees]);

  return isHydrated ? (
    <StyledApplicationWrapper>
      <Header
        numberOfEmployees={employees.length}
        onFilterChanged={handleEmployeeFilter}
        onNewEmployee={onNewEmployee}
        onSearch={onSearch}
        filterOptions={filterOptions}
      />

      {currentEmployees.length > 0 ? (
        currentEmployees.map((employee, index) => (
          <Employee
            employee={employee}
            onEmployeeSelect={onEmployeeExpand}
            employeeIndex={index}
            onEmployeeDelete={handleConfirmDelete}
          />
        ))
      ) : (
        <StyledEmptyStateImageWrapper>
          <img src={emptyStateIcon} />
          <p>There is nothing here</p>
          <p>
            Create a new employee by clicking the <strong>New Employee </strong>
            button to get started
          </p>
        </StyledEmptyStateImageWrapper>
      )}
    </StyledApplicationWrapper>
  ) : (
    <></>
  );
}

export default Employees;
