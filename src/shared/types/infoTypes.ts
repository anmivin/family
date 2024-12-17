export interface SkillProps {
  id: string;
  name: string;
  character: { id: string; percent: number };
}

export interface SubbrunchProps {
  id: string;
  name: string;
  sorceHandle: string;
  targetHandle: string;
  position: { x: number; y: number };
}

export interface CharacteristicProps extends SubbrunchProps {
  dedcription: string;
  color: string;
  branches: SubbrunchProps[];
}

export interface UserProps {
  name: string;
  level: number;
  xp: number;
  gold: number;
  characteristics: { [id: string]: number }[];
  skills: { [id: string]: number }[];
}
