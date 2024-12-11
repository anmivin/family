import { styled, Box } from '@mui/material';
import Spinner from '../ProgressCircle';
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
        <Spinner size={120} progress={progress} />
      </Member>
      <Member>
        {userXp}/{nextLevelXp}
      </Member>
    </Progress>
  );
};

export default CharacterProgress;
