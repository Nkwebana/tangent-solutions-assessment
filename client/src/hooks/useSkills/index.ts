import { useState, useEffect } from 'react';
import { SeniorityRating, SkillFormInput } from '../../enums';
import { Skill, SkillIndex } from '../../interfaces';

type B = keyof Skill;

function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([
    { name: 'Coding', seniorityRating: SeniorityRating.Beginner, yearsExp: 5 },
  ]);

  const addSkill = () => {
    skills?.push();
    setSkills([...skills]);
  };

  const deleteSkill = (skillToDeleteIndex: number) => {
    const skillWithoutSkillToBeDeleted = skills?.splice(skillToDeleteIndex, 1);

    setSkills([...skillWithoutSkillToBeDeleted]);
  };

  const onSkillChange = (
    value: string,
    skillToEditIndex: number,
    fieldName: SkillFormInput
  ) => {
    skills[skillToEditIndex as keyof Skill[]][fieldName] = value;

    setSkills([...skills]);
  };

  const setDefaultSkills = (skillsFromServer: Skill[]) =>
    setSkills(skillsFromServer);

  useEffect(() => {
    console.log(skills);
  }, [skills]);

  return {
    skills,
    addSkill,
    deleteSkill,
    setDefaultSkills,
    onSkillChange,
  };
}

export default useSkills;
