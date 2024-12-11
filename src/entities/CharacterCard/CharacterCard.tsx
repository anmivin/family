import { calcLavel } from '@helpers/calcLavel';
import { Box, Typography } from '@mui/material';
import CharacterProgress from '@ui/CharacterProgress';
import { StyledCard } from './CharacterCard.styled';
import { CharacterCardProps } from './CharacterCard.types';
const CharacterCard = ({ name, level, xp, gold, levelName }: CharacterCardProps) => {
  const nextLevelXp = calcLavel(level + 1);

  return (
    <StyledCard>
      <Box display="flex" flexDirection="row" gap={8} alignItems="center">
        <CharacterProgress userXp={xp} nextLevelXp={nextLevelXp} />
        <Box p={3}>
          <Typography variant="body2">{name}</Typography>
          <Typography variant="caption">{levelName}</Typography>
          <Typography>голды: {gold}</Typography>
          <Typography variant="caption">
            {xp}/{nextLevelXp}
          </Typography>
        </Box>
      </Box>
      {/*       <>
        карта характеристик <>поиск</>
      </>
      <>карта навыков</> */}
    </StyledCard>
  );
};

export default CharacterCard;
