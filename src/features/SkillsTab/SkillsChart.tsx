import { Box, Typography } from '@mui/material';
import ProgressBar from '@ui/ProgressBar';
import { setIsSkillFormOpen } from '@stores/modals/modals.store';

import { calcLevel, calcXpPerLevel } from '@helpers/calcLavel';
import { useAppDispatch } from '@stores/global.store';
import useSwr from '../../shared/swr/useSwr';

const SkillsChart = () => {
  const { data: userSkills } = useSwr({ url: '/characteristics/skills/user' });
  const dispatch = useAppDispatch();
  const onOpen = (id: string) => {
    dispatch(setIsSkillFormOpen(true));
  };

  const skillInfo = (xp: number) => {
    const level = calcLevel(xp);
    const skillNextLevel = calcXpPerLevel(calcLevel(xp) + 1);

    return {
      currentPercent: (xp * 100) / skillNextLevel,
      nextLevelXp: skillNextLevel,
      currentLevel: level,
    };
  };
  return (
    <Box>
      {userSkills?.map((skill) => {
        const skInfo = skillInfo(skill.xp);
        return (
          <Box width="100%" onClick={() => onOpen(skill.id)}>
            <Typography>{`${skill.name} (${skInfo.currentLevel} lvl.)`}</Typography>
            <ProgressBar value={skInfo.currentPercent} subtitle={`${skill.xp}/${skInfo.nextLevelXp}`} />
          </Box>
        );
      })}
    </Box>
  );
};

export default SkillsChart;
