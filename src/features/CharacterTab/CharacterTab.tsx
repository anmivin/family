import { useMemo, useEffect } from 'react';
import { IconMap } from '@features/FeaturesTab/FeaturesTab.constants';
import CharacterCard from '@entities/CharacterTab/CharacterCard';
import StreakSection from '@entities/CharacterTab/StreakSection/StreakSection';

import { useAppSelector } from '@shared/stores/global.store';
import useSwr from '@shared/swr/useSwr';

interface CharacterTabProps {
  onSkillClick: () => void;
  onFeatureClick: () => void;
}
const CharacterTab = ({ onSkillClick, onFeatureClick }: CharacterTabProps) => {
  const { userInfo } = useAppSelector((state) => state.userSlice);
  const { data: userFeatures } = useSwr({ url: '/characteristics/features/user' });
  const { data: userSkills } = useSwr({ url: '/characteristics/skills/user' });

  const bestFeature = useMemo(() => {
    if (!userFeatures?.length) return;
    const arrayForSort = [...userFeatures];
    const feature = arrayForSort.sort((a, b) => (a.userXp < b.userXp ? 1 : -1))[0];
    console.log(feature);
    return { xp: feature.userXp, name: feature.name, color: IconMap[feature.id as keyof typeof IconMap].color };
  }, [userFeatures]);

  const bestSkill = useMemo(() => {
    if (!userSkills?.length) return;
    const arrayForSort = [...userSkills];
    const skill = arrayForSort.sort((a, b) => (a.xp < b.xp ? 1 : -1))[0];

    return { xp: skill.xp, name: skill.name };
  }, [userSkills]);
  return (
    <>
      {userInfo && (
        <CharacterCard
          {...userInfo}
          bestFeature={bestFeature}
          bestSkill={bestSkill}
          onSkillClick={onSkillClick}
          onFeatureClick={onFeatureClick}
        />
      )}
      {/*  <StreakSection /> */}
    </>
  );
};

export default CharacterTab;
