/**
 *
 * SkillsManager
 *
 */

import React, { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import { SkillsManagerProps, FormInputs } from '../../interfaces';
import {
  StyledSkillsManager,
  StyledRow,
  StyledSkillsTable,
} from './styledComponents';
import Button from '../button';
import { ButtonVariant, FormFieldType, SeniorityRating } from '../../enums';
import { ReactComponent as PlusIcon } from '../../assets/svg/icon-plus.svg';
import { ReactComponent as DeleteIcon } from '../../assets/svg/icon-delete.svg';
import Input from '../formFields/input';

function SkillsManager({ control, register }: SkillsManagerProps): JSX.Element {
  const { fields, append, remove } = useFieldArray<FormInputs>({
    control,
    name: 'skills',
  });
  return (
    <StyledSkillsManager>
      <StyledSkillsTable>
        <tbody>
          {fields.length > 0 ? (
            <tr>
              <th>Skill</th>
              <th>Yrs Exp.</th>
              <th>Seniority rating</th>
            </tr>
          ) : null}

          {fields.map((field, index: number) => (
            <StyledRow key={field.id}>
              <td>
                <Input
                  name={`skills.${index}.name`}
                  control={control}
                  type={FormFieldType.Text}
                  rules={{ required: true }}
                />
              </td>
              <td>
                <Input
                  name={`skills.${index}.yearsExp`}
                  control={control}
                  type={FormFieldType.Number}
                  rules={{ required: true }}
                />
              </td>
              <td>
                <select
                  placeholder="Rating"
                  {...register(`skills.${index}.seniorityRating`)}
                >
                  <option value={SeniorityRating.Beginner}>
                    {SeniorityRating.Beginner}
                  </option>
                  <option value={SeniorityRating.Junior}>
                    {SeniorityRating.Junior}
                  </option>
                  <option value={SeniorityRating.Intermediate}>
                    {SeniorityRating.Intermediate}
                  </option>
                  <option value={SeniorityRating.Senior}>
                    {SeniorityRating.Senior}
                  </option>
                </select>
              </td>
              <a onClick={() => remove(index)}>
                <DeleteIcon />
              </a>
            </StyledRow>
          ))}
        </tbody>
      </StyledSkillsTable>
      <Button
        onClick={() =>
          append({
            name: '',
            seniorityRating: SeniorityRating.Beginner,
            yearsExp: 0,
          })
        }
        title="Add New Item"
        icon={<PlusIcon />}
        variant={ButtonVariant.SecondaryAction}
      />
    </StyledSkillsManager>
  );
}

export default SkillsManager;
