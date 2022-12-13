import { useState, useEffect } from 'react';
import { SeniorityRating, SkillFormInput } from '../../enums';
import { NewSkill, Skill } from '../../interfaces';

function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([
    { name: '', seniorityRating: SeniorityRating.Beginner, yearsExp: 0 },
  ]);

  const addSkill = () => {
    skills?.push({
      name: '',
      seniorityRating: SeniorityRating.Beginner,
      yearsExp: 0,
    });
    setSkills([...skills]);
  };

  const deleteSkill = (skillToDeleteIndex: number) => {
    const skillWithoutSkillToBeDeleted = skills?.splice(skillToDeleteIndex, 1);

    setSkills([...skillWithoutSkillToBeDeleted]);
  };

  const onSkillChange = ({ value, skillToEditIndex, fieldName }: NewSkill) => {
    (skills[skillToEditIndex][fieldName] as string | number) = value;

    setSkills([...skills]);
  };

  const setDefaultSkills = (skillsFromServer: Skill[]) =>
    setSkills(skillsFromServer);

  return {
    skills,
    addSkill,
    deleteSkill,
    setDefaultSkills,
    onSkillChange,
  };
}

export default useSkills;
