import { Box, Typography } from '@mui/material';

import ProgressBar from '@ui/ProgressBar';
import AccordionState from '@ui/AccordionState';
import { calcLevel, calcXpPerLevel } from '@helpers/calcLavel';
import { useAppSelector } from '@stores/global.store';
import { CodeIcon } from '@ui/Icons';

const FeaturesTab = () => {
  const { userFeatures, pendingUserFeatures, errorUserFeatures } = useAppSelector((state) => state.listSlice);

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
      {userFeatures.map((feature) => {
        const featInfo = featureInfo(feature.userXp);
        return (
          <AccordionState
            key={feature.id}
            collapsedNode={
              <Box width="100%">
                <CodeIcon />
                <Typography>{`${feature.name} (${featInfo.currentLevel} lvl.)`}</Typography>
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
                  title={`${feat.name} (${info.currentLevel} lvl.)`}
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
