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
import { ButtonVariant, SeniorityRating } from '../../enums';
import { ReactComponent as PlusIcon } from '../../assets/svg/icon-plus.svg';

function SkillsManager({ control, register }: SkillsManagerProps): JSX.Element {
  const { fields, append, remove } = useFieldArray<FormInputs>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'skills', // unique name for your Field Array
  });
  return (
    <StyledSkillsManager>
      <StyledSkillsTable>
        <tbody>
          <tr>
            <th>Skill</th>
            <th>Yrs Exp.</th>
            <th>Seniority rating</th>
          </tr>
          {fields.map((field, index: number) => (
            <StyledRow key={field.id}>
              <td>
                <input
                  placeholder="Skill"
                  {...register(`skills.${index}.name`, { required: true })}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Exp"
                  {...register(`skills.${index}.yearsExp`, { required: true })}
                />
              </td>
              <td>
                <select
                  placeholder="Rating"
                  {...register(`skills.${index}.seniorityRating`, {
                    required: true,
                  })}
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
                <Button
                  title="dlt"
                  onClick={() => remove(index)}
                  variant={ButtonVariant.SecondaryAction}
                />
              </td>
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

// <td>
//   <Input control={control} type={FormFieldType.Number} />
// </td>
// <td>
//   <select>
//     <option value={SeniorityRating.Beginner}>
//       {SeniorityRating.Beginner}
//     </option>
//     <option value={SeniorityRating.Junior}>
//       {SeniorityRating.Junior}
//     </option>
//     <option value={SeniorityRating.Senior}>
//       {SeniorityRating.Senior}
//     </option>
//   </select>
//   {/* <Button
//   title="delete"
//   onClick={() => onSkillDelete(index)}
//   variant={ButtonVariant.SecondaryAction}
// /> */}
// </td>
