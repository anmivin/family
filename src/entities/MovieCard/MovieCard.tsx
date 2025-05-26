import { Box, Typography } from '@mui/material';
import { MovieCardProps } from './MovieCard.types';
import { StyledImg, StyledCard } from './MovieCard.styled';
const MovieCard = (props: MovieCardProps) => {
  return (
    <StyledCard>
      <StyledImg src={props.poster?.previewUrl} />
      <Typography>{props.name}</Typography>
    </StyledCard>
  );
};

export default MovieCard;
