import { calcXpPerLevel, calcLevel } from '@helpers/calcLavel';
import { Box, Typography } from '@mui/material';
import CharacterProgress from '@ui/CharacterProgress';
import { StyledCard } from './CharacterCard.styled';
import { CharacterCardProps } from './CharacterCard.types';
import { CoinIcon } from '@ui/Icons';
const CharacterCard = ({ name, level, xp, gold, levelName }: CharacterCardProps) => {
  const nextLevelXp = calcXpPerLevel(level + 1);
  const lev = calcLevel(xp);
  return (
    <StyledCard>
      <Box display="flex" flexDirection="row" gap={8} alignItems="center">
        <CharacterProgress userXp={xp} nextLevelXp={nextLevelXp} />
        <Box p={3}>
          <Typography variant="body2">{name}</Typography>
          <Typography variant="caption">{levelName}</Typography>
          <Box display="flex" flexDirection="row" gap={1} alignItems="center">
            <CoinIcon />
            <Typography>{gold}</Typography>
          </Box>

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
