import { useMemo, useEffect } from 'react';

import CharacterCard from '@entities/CharacterTab/CharacterCard';
import StreakSection from '@entities/CharacterTab/StreakSection/StreakSection';

import { useAppSelector } from '@stores/global.store';
import useSwr from '@swr/useSwr';

const CharacterTab = () => {
  const { userInfo } = useAppSelector((state) => state.userSlice);
  const { data: userFeatures } = useSwr({ url: '/characteristics/features/user' });
  const { data: userSkills } = useSwr({ url: '/characteristics/skills/user' });

  const bestFeature = useMemo(() => {
    if (!userFeatures?.length) return;
    const arrayForSort = [...userFeatures];
    const feature = arrayForSort.sort((a, b) => (a.userXp < b.userXp ? 1 : -1))[0];

    return { xp: feature.userXp, name: feature.name, color: feature.color };
  }, [userFeatures]);

  const bestSkill = useMemo(() => {
    if (!userSkills?.length) return;
    const arrayForSort = [...userSkills];
    const skill = arrayForSort.sort((a, b) => (a.xp < b.xp ? 1 : -1))[0];

    return { xp: skill.xp, name: skill.name };
  }, [userSkills]);
  return (
    <>
      {userInfo && <CharacterCard {...userInfo} bestFeature={bestFeature} bestSkill={bestSkill} />}
      <StreakSection />
    </>
  );
};

export default CharacterTab;
