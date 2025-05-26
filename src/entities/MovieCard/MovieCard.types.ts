import { components } from '@api/KinopoiskApi';
export interface MovieCardProps extends Omit<components['schemas']['SearchMovieDtoV1_4'], 'ratingMpaa'> {}
