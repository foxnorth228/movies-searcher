import { IGetMoviesParameters } from '@src/servises/imdb-api/types';

export const prepareURLParams = ({ count, title, genre }: IGetMoviesParameters) => {
  const urlParams = new URLSearchParams();
  urlParams.append('title_type', 'tv_movie');
  urlParams.append('count', String(count));
  if (title !== '') {
    urlParams.append('title', title);
  }
  if (genre !== '') {
    urlParams.append('genres', genre);
  }
  return urlParams;
};
