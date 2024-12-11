import { styled, Box, Typography } from '@mui/material';
import ProgressCircle from '@ui/ProgressCircle';
import { useMemo } from 'react';
const Progress = styled(Box)`
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
`;

const Member = styled(Box)`
  grid-column: 1;
  grid-row: 1;
`;

export interface CharacterPrrogressProps {
  userXp: number;
  nextLevelXp: number;
}
const CharacterProgress = ({ userXp, nextLevelXp }: CharacterPrrogressProps) => {
  const progress = (userXp * 100) / nextLevelXp;

  return (
    <Progress>
      <Member>
        <ProgressCircle size={100} progress={progress} />
      </Member>
      <Member>
        <Typography variant="caption">{Math.round(progress)}%</Typography>
      </Member>
    </Progress>
  );
};

export default CharacterProgress;
