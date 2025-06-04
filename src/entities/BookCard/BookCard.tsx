import { Box, Button, Typography } from '@mui/material';
import { MovieCardProps } from './BookCard.types';
import { StyledImg, StyledCard } from './BookCard.styled';
import { HeartPlusIcon } from '@shared/ui/Icons';
import { useCallback } from 'react';
const BookCard = (props: MovieCardProps) => {
  const onAddToList = useCallback(() => {
    const {
      id,
      volumeInfo: { title, authors, publishedDate, description, pageCount, categories, imageLinks },
    } = props;
    const data = {
      id,
      title,
      authors,
      publishedDate,
      description,
      pageCount,
      categories,
      imageLinks,
    };
    console.log(data);
  }, [props]);
  return (
    <StyledCard>
      <StyledImg src={props.volumeInfo?.imageLinks?.thumbnail ?? undefined} />
      <Box>
        <Typography variant="subtitle1">{props.volumeInfo.title}</Typography>
        <Typography>{props.volumeInfo.description}</Typography>
      </Box>
      <Button startIcon={<HeartPlusIcon />} onClick={onAddToList}>
        Добавить в список
      </Button>
    </StyledCard>
  );
};

export default BookCard;
