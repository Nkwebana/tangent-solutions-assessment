import { Skill } from '../../shared';

interface SkillsManagerProps {
  onSkillAdd: () => void;
  skills: Skill[];
  onSkillChange: (value: string, skillIndex: number, fieldName: string) => void;
  onSkillDelete: (skillToBeDeletedIndex: number) => void;
}

export type { SkillsManagerProps };
