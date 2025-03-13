import { Box, Typography } from '@mui/material';
import ProgressBar from '@ui/ProgressBar';

import { calcLevel, calcXpPerLevel } from '@helpers/calcLavel';
import { useAppSelector } from '@stores/global.store';

const SkillsChart = () => {
  const { userSkills } = useAppSelector((state) => state.listSlice);

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
      {userSkills.map((skill) => {
        const skInfo = skillInfo(skill.xp);
        return (
          <Box width="100%">
            <Typography>{`${skill.name} (${skInfo.currentLevel} lvl.)`}</Typography>
            <ProgressBar value={skInfo.currentPercent} subtitle={`${skill.xp}/${skInfo.nextLevelXp}`} />
          </Box>
        );
      })}
    </Box>
  );
};

export default SkillsChart;
