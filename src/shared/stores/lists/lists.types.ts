import { components } from '@api/Api';

export interface ListSliceProps {
  selectedSkill: components['schemas']['OutputSkillDto'] | null;
}

export const initialState: ListSliceProps = {
  selectedSkill: null,
};
