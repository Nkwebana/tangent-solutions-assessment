import React from 'react';
import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from '../';
import { useTestComponentWithTheme } from '../../../hooks';
import SkillsManager from '../';

test('does component render', () => {
  const mountWithTheme = useTestComponentWithTheme();
    const { getByTestId } = render(
    mountWithTheme(
      <SkillsManager   testID="component test id " />
    )
  );

  const componentSnapshot = getByTestId('component test id');

  expect(componentSnapshot).toMatchSnapshot();

});