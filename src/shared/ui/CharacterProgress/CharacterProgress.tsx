import { CircularProgress, styled, Box } from '@mui/material';

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
        <CircularProgress color="inherit" size={120} thickness={8} value={100} variant="determinate" />
      </Member>
      <Member>
        <CircularProgress size={120} thickness={8} value={progress} variant="determinate" />
      </Member>

      <Member>
        {userXp}/{nextLevelXp}
      </Member>
    </Progress>
  );
};

export default CharacterProgress;
