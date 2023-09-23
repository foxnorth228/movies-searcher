import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface IMovie {
  id: string;
}

export interface IMovieTitle {
  title: string;
}

export interface ISearchResponseData {
  results: Array<IMovie>;
  errorMessage: string;
}

export interface IGetMoviesTitleResponseData {
  results: Array<IMovieTitle>;
  errorMessage: string;
}

export interface ISearchResponse {
  data: ISearchResponseData;
  error: FetchBaseQueryError | undefined;
}

export interface IGetMoviesTitleResponse {
  data: IGetMoviesTitleResponseData;
  error: FetchBaseQueryError | undefined;
}

export interface IGetMoviesParameters {
  count: number;
  title: string;
  genre: string;
}

export interface IGetMoviesData {
  movies: IMovie[];
  isLastData: boolean;
}

export interface IGetMoviesTitleData {
  titles: string[];
}
