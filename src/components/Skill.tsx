import { Badge } from "@/components/ui/badge";

export type SkillProps = {
  skill: string;
}

export const Skill = ({ skill }: SkillProps) => {
  return <Badge variant="secondary">{skill}</Badge>;
};
