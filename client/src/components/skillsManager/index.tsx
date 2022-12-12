/**
 *
 * SkillsManager
 *
 */

import React, { useEffect } from 'react';
import { SkillsManagerProps, Skill } from '../../interfaces';
import {
  StyledSkillsManager,
  StyledRow,
  StyledHeadingItem,
  StyledSkillNameWrapper,
  StyledSkillsTable,
} from './styledComponents';
import Button from '../button';
import {
  ButtonVariant,
  FormFieldType,
  SeniorityRating,
  SkillFormInput,
} from '../../enums';
import { ReactComponent as PlusIcon } from '../../assets/svg/icon-plus.svg';

function SkillsManager({
  skills,
  onSkillAdd,
  onSkillChange,
  onSkillDelete,
}: SkillsManagerProps): JSX.Element {
  return (
    <StyledSkillsManager>
      <StyledSkillsTable>
        <tr>
          <th>Skill</th>
          <th>Yrs Exp.</th>
          <th>Seniority rating</th>
        </tr>
        {skills.map(
          ({ name, seniorityRating, yearsExp }: Skill, index: number) => (
            <StyledRow key={name}>
              <td>
                <input
                  defaultValue={name}
                  type={FormFieldType.Text}
                  onChange={({ target: { value } }) =>
                    onSkillChange(value, index, SkillFormInput.Name)
                  }
                />
              </td>
              <td>
                <input
                  defaultValue={yearsExp}
                  type={FormFieldType.Number}
                  onChange={({ target: { value } }) =>
                    onSkillChange(value, index, SkillFormInput.YrsExpr)
                  }
                />
              </td>
              <td>
                <select
                  defaultValue={seniorityRating}
                  onChange={({ target: { value } }) =>
                    onSkillChange(value, index, SkillFormInput.SeniorityRating)
                  }
                >
                  <option value={SeniorityRating.Beginner}>
                    {SeniorityRating.Beginner}
                  </option>
                  <option value={SeniorityRating.Junior}>
                    {SeniorityRating.Junior}
                  </option>
                  <option value={SeniorityRating.Senior}>
                    {SeniorityRating.Senior}
                  </option>
                </select>
                {/* <Button
                  title="delete"
                  onClick={() => onSkillDelete(index)}
                  variant={ButtonVariant.SecondaryAction}
                /> */}
              </td>
            </StyledRow>
          )
        )}
      </StyledSkillsTable>
      <Button
        onClick={onSkillAdd}
        title="Add New Item"
        icon={<PlusIcon />}
        variant={ButtonVariant.SecondaryAction}
      />
    </StyledSkillsManager>
  );
}

export default SkillsManager;
