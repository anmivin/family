import { components } from '@api/Api';

export interface ListSliceProps {
  userFeatures: components['schemas']['FeatureDto'][];
  pendingUserFeatures: boolean;
  errorUserFeatures: string;

  userSkills: components['schemas']['SkillXpDto'][];
  pendingUserSkills: boolean;
  errorUserSkills: string;

  skillList: components['schemas']['SkillListDto'][];
  pendingSkillList: boolean;
  errorSkillList: string;

  featureList: { id: string; name: string }[];
}

export const initialState: ListSliceProps = {
  userFeatures: [],
  pendingUserFeatures: false,
  errorUserFeatures: '',

  userSkills: [],
  pendingUserSkills: false,
  errorUserSkills: '',

  skillList: [],
  pendingSkillList: false,
  errorSkillList: '',

  featureList: [],
};
