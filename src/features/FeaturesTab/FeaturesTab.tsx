import { Box, Typography } from '@mui/material';

import ProgressBar from '@ui/ProgressBar';
import AccordionState from '@ui/AccordionState';
import { calcLevel, calcXpPerLevel } from '@shared/helpers/calcLavel';

import { IconMap } from './FeaturesTab.constants';
import useSwr from '@shared/swr/useSwr';
const FeaturesTab = () => {
  const { data: userFeatures } = useSwr({ url: '/characteristics/features/user' });

  const featureInfo = (xp: number) => {
    const level = calcLevel(xp);
    const featureNextLevel = calcXpPerLevel(calcLevel(xp) + 1);

    return {
      currentPercent: (xp * 100) / featureNextLevel,
      nextLevelXp: featureNextLevel,
      currentLevel: level,
    };
  };

  return (
    <Box>
      {userFeatures?.map((feature) => {
        const featInfo = featureInfo(feature.userXp);
        return (
          <AccordionState
            key={feature.id}
            collapsedNode={
              <Box width="100%">
                <Box display="flex" gap={2} alignItems="center">
                  {IconMap[feature.id].icon}

                  <Typography>{`${feature.name} (${featInfo.currentLevel} lvl.)`}</Typography>
                </Box>

                <ProgressBar
                  value={featInfo.currentPercent}
                  subtitle={`${feature.userXp}/${featInfo.nextLevelXp}`}
                  color={feature.color}
                />
              </Box>
            }
            expandedNode={feature.name}
          >
            {feature.children.map((feat) => {
              const info = featureInfo(feat.userXp);
              return (
                <ProgressBar
                  key={feat.id}
                  value={info.currentPercent}
                  title={
                    <Box display="flex" gap={2} alignItems="center">
                      {IconMap[feat.id].icon}

                      <Typography>{`${feat.name} (${info.currentLevel} lvl.)`}</Typography>
                    </Box>
                  }
                  subtitle={`${info.nextLevelXp}`}
                  color={feature.color}
                />
              );
            })}
          </AccordionState>
        );
      })}
    </Box>
  );
};

export default FeaturesTab;
