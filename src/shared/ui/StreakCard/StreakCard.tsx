import { StreakCardProps } from './StreakCard.types';
import { StyledLink } from './StreakCard.styled';
import { Typography, Box } from '@mui/material';

const StreakCard = ({ icon, name, value, link }: StreakCardProps) => {
  return (
    <StyledLink to={link}>
      {icon}
      <Box width="100%" display="flex" flexDirection="column" alignItems="start" justifyContent="center">
        <Typography variant="caption">{name}</Typography>
        <Typography variant="body2">{value}</Typography>
      </Box>
    </StyledLink>
  );
};

export default StreakCard;
