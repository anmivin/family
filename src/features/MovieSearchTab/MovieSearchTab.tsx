import { useAppDispatch, useAppSelector } from '@shared/stores/global.store';
import { useEffect, useState } from 'react';

import { Box, TextField, Button } from '@mui/material';
import MovieCard from '@entities/MovieCard/MovieCard';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MovieSearchTabProps, MovieSearchTabSchema } from './MovieSearchTab.types';
import { fetchKino } from '@shared/stores/lists/lists.fetchers';
import useSwr from '@shared/swr/useSwr';
const MovieSearchTab = () => {
  const [searchString, setSearchstring] = useState('');

  const dispatch = useAppDispatch();
  useEffect(() => {
    searchString.length && dispatch(fetchKino(searchString));
  }, [searchString]);

  const formMethods = useForm<MovieSearchTabProps>({
    resolver: yupResolver(MovieSearchTabSchema),
  });

  const { movieList } = useAppSelector((state) => state.listSlice);
  useEffect(() => console.log('movieList', movieList), [movieList]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = formMethods;

  const formValues = watch();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Controller control={control} name="search" render={({ field }) => <TextField {...field} />} />{' '}
      <Button onClick={() => setSearchstring(formValues.search)}>найти</Button>
      {!!movieList?.docs.length && movieList.docs.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Box>
  );
};

export default MovieSearchTab;
