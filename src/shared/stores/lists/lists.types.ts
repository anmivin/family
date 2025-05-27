import { components } from '@shared/api/Api';
import { components as kinoKomponents } from '@shared/api/KinopoiskApi';
export interface ListSliceProps {
  selectedSkill: components['schemas']['OutputSkillDto'] | null;

  movieList: kinoKomponents['schemas']['SearchMovieResponseDtoV1_4'] | null;
  pendingMovieList: boolean;
  errorMovieList: string | null;
}

export const initialState: ListSliceProps = {
  selectedSkill: null,

  movieList: null,
  pendingMovieList: false,
  errorMovieList: null,
};
