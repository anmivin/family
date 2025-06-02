import { calcXpPerLevel, calcLevel } from '@shared/helpers/calcLavel';
import { Box, Typography } from '@mui/material';
import CharacterProgress from '@ui/CharacterProgress';
import { StyledCard } from './CharacterCard.styled';
import { CharacterCardProps } from './CharacterCard.types';
import { CoinIcon } from '@ui/Icons';
import { useMemo } from 'react';
import ProgressBar from '@ui/ProgressBar';
import { ColorType } from '@shared/ui/ProgressBar/ProgressBar.types';

const CharacterCard = ({ name, xp, gold, bestFeature, bestSkill, level }: CharacterCardProps) => {
  const nextLevelXp = calcXpPerLevel((level?.level ?? 0) + 1);

  const bestFeatureInfo = useMemo(() => {
    if (!bestFeature) return;
    const level = calcLevel(bestFeature.xp);
    const featureNextLevel = calcXpPerLevel(calcLevel(bestFeature.xp) + 1);

    return {
      currentPercent: (bestFeature.xp * 100) / featureNextLevel,
      currentLevel: level,
    };
  }, [bestFeature, level]);

  const bestSkillInfo = useMemo(() => {
    if (!bestSkill) return;
    const level = calcLevel(bestSkill.xp);
    const skillNextLevel = calcXpPerLevel(calcLevel(bestSkill.xp) + 1);

    return {
      currentPercent: (bestSkill.xp * 100) / skillNextLevel,
      currentLevel: level,
    };
  }, [bestSkill]);

  return (
    <StyledCard>
      <Box p={3} display="flex" flexDirection="column">
        <CharacterProgress userXp={xp} nextLevelXp={nextLevelXp} />
        <Typography variant="caption">
          XP: {xp}/{nextLevelXp}
        </Typography>
        <Box display="flex" flexDirection="row" gap={1} alignItems="center">
          <CoinIcon />
          <Typography>{gold}</Typography>
        </Box>
      </Box>

      <Box p={3} display="flex" flexDirection="column" width="100%">
        <Typography variant="body2">{name}</Typography>
        <Typography>
          {level?.name}: {level?.level} lvl.
        </Typography>
        <Typography>Сильнейшая черта:</Typography>
        {!!bestFeatureInfo && (
          <ProgressBar
            value={bestFeatureInfo.currentPercent}
            subtitle={`${bestFeature?.name}: ${bestFeatureInfo.currentLevel}lvl.`}
            color={bestFeature?.color as ColorType}
          />
        )}

        <Typography>Сильнейший навык:</Typography>
        {!!bestSkillInfo && (
          <ProgressBar
            value={bestSkillInfo.currentPercent}
            subtitle={`${bestSkill?.name}: ${bestSkillInfo.currentLevel}lvl.`}
          />
        )}
      </Box>
    </StyledCard>
  );
};

export default CharacterCard;
