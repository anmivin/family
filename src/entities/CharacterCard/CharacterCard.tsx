import { ProfiIcons } from '../../shared/PropfileIIcon.constants';
import { calcLavel } from '../../shared/libs/calcLavel';
import { styled, Box, Typography } from '@mui/material';
import CharacterProgress from '../../shared/ui/CharacterProgress';
const StyledCard = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 20px 20px 40px;
  background-color: ${({ theme }) => theme.color.blue200};
`;

const CharacterCard = () => {
  const user = { name: 'sfsdf', level: 1, xp: 300, gold: 400 };
  const icon = ProfiIcons[1];
  const nextLevelXp = calcLavel(user.level + 1);

  return (
    <StyledCard>
      <Box display="flex" flexDirection="row" gap={8} alignItems="center">
        <CharacterProgress userXp={user.xp} nextLevelXp={nextLevelXp} />
        <Box p={3}>
          <Typography variant="body2">{user.name}</Typography>
          <Typography>{user.gold}</Typography>
        </Box>
        <></>
      </Box>
      {/*       <>
        карта характеристик <>поиск</>
      </>
      <>карта навыков</> */}
    </StyledCard>
  );
};

export default CharacterCard;
