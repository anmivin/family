import { components } from '@shared/api/Api';
import { components as kinoKomponents } from '@shared/api/KinopoiskApi';
import { Root } from '@shared/types/booksTypes';
export interface ListSliceProps {
  selectedSkill: components['schemas']['OutputSkillDto'] | null;

  movieList: kinoKomponents['schemas']['SearchMovieResponseDtoV1_4'] | null;
  pendingMovieList: boolean;
  errorMovieList: string | null;

  bookList: Root | null;
  pendingBookList: boolean;
  errorBookList: string | null;
}

export const initialState: ListSliceProps = {
  selectedSkill: null,

  movieList: null,
  pendingMovieList: false,
  errorMovieList: null,

  bookList: null,
  pendingBookList: false,
  errorBookList: null,
};
