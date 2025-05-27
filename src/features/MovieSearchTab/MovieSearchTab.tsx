import { useAppDispatch, useAppSelector } from '@stores/global.store';
import { useEffect, useState } from 'react';

import { Box, TextField, Button } from '@mui/material';
import MovieCard from '@entities/MovieCard/MovieCard';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MovieSearchTabProps, MovieSearchTabSchema } from './MovieSearchTab.types';
import useSwr from '@swr/useSwr';
const MovieSearchTab = () => {
  const [searchString, setSearchstring] = useState('');
  const { data } = useSwr({ url: '/', fetchType: 'kino' });
  const dispatch = useAppDispatch();
  useEffect(() => {
    searchString.length && dispatch(fetchMovies(searchString));
  }, [searchString]);

  const formMethods = useForm<MovieSearchTabProps>({
    resolver: yupResolver(MovieSearchTabSchema),
  });

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
      {!!moviesList?.docs.length && moviesList.docs.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Box>
  );
};

export default MovieSearchTab;
