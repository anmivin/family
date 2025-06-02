import { Box, Typography } from '@mui/material';

import ProgressBar from '@ui/ProgressBar';
import AccordionState from '@ui/AccordionState';
import { calcLevel, calcXpPerLevel } from '@shared/helpers/calcLavel';

import { IconMap } from './FeaturesTab.constants';
import useSwr from '@shared/swr/useSwr';
import { ColorType } from '@shared/ui/ProgressBar/ProgressBar.types';
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
              <Box width="100%" display="flex" flexDirection="column" gap={2}>
                <Box display="flex" gap={2} alignItems="center">
                  {IconMap[feature.id as keyof typeof IconMap].icon}

                  <Typography>{`${feature.name} (${featInfo.currentLevel} lvl.)`}</Typography>
                </Box>

                <ProgressBar
                  value={featInfo.currentPercent}
                  subtitle={`${feature.userXp}/${featInfo.nextLevelXp}`}
                  color={IconMap[feature.id as keyof typeof IconMap].color as ColorType}
                />
              </Box>
            }
            expandedNode={
              <Box display="flex" gap={2} alignItems="center">
                {IconMap[feature.id as keyof typeof IconMap].icon}

                <Typography>{feature.name}</Typography>
              </Box>
            }
          >
            {feature.children.map((feat) => {
              const info = featureInfo(feat.userXp);
              return (
                <ProgressBar
                  key={feat.id}
                  value={info.currentPercent}
                  title={
                    <Box display="flex" gap={2} alignItems="center">
                      {IconMap[feat.id as keyof typeof IconMap].icon}

                      <Typography>{`${feat.name} (${info.currentLevel} lvl.)`}</Typography>
                    </Box>
                  }
                  subtitle={`${info.nextLevelXp}`}
                  color={IconMap[feature.id as keyof typeof IconMap].color as ColorType}
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
