import { useAppDispatch, useAppSelector } from '@shared/stores/global.store';
import { useEffect, useState } from 'react';

import { Box, TextField, Button } from '@mui/material';
import BookCard from '@entities/BookCard/BookCard';
import MovieCard from '@entities/MovieCard/MovieCard';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MovieSearchTabProps, MovieSearchTabSchema } from './MovieSearchTab.types';
import { fetchBooks } from '@shared/stores/lists/lists.fetchers';

const BookSearchTab = () => {
  const [searchString, setSearchstring] = useState('');

  const dispatch = useAppDispatch();
  useEffect(() => {
    searchString.length && dispatch(fetchBooks(searchString));
  }, [searchString]);

  const formMethods = useForm<MovieSearchTabProps>({
    resolver: yupResolver(MovieSearchTabSchema),
  });

  const { bookList } = useAppSelector((state) => state.listSlice);
  useEffect(() => console.log('bookList', bookList), [bookList]);
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
      <Controller control={control} name="search" render={({ field }) => <TextField {...field} />} />
      <Button onClick={() => setSearchstring(formValues.search)}>найти</Button>
      {!!bookList?.items.length && bookList.items.map((book) => <BookCard key={book.id} {...book} />)}
    </Box>
  );
};

export default BookSearchTab;
