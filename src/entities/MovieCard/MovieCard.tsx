import { Box, Button, Typography } from '@mui/material';
import { MovieCardProps } from './MovieCard.types';
import { StyledImg, StyledCard } from './MovieCard.styled';
import { HeartPlusIcon } from '@shared/ui/Icons';
import { useCallback } from 'react';
const MovieCard = (props: MovieCardProps) => {
  const onAddToList = useCallback(() => {
    const { genres, id, isSeries, movieLength, rating, seriesLength, type, year } = props;
    const data = {
      genres,
      id,
      isSeries,
      movieLength,
      rating: { imdb: rating?.imdb, kp: rating?.kp },
      seriesLength,
      type,
      year,
    };
    console.log(data);
  }, [props]);
  return (
    <StyledCard>
      <StyledImg src={props.poster?.previewUrl ?? undefined} />
      <Box>
        <Typography variant="subtitle1">{props.name}</Typography>
        <Typography>{props.description}</Typography>
      </Box>
      <Button startIcon={<HeartPlusIcon />} onClick={onAddToList}>
        Добавить в список
      </Button>
    </StyledCard>
  );
};

export default MovieCard;
