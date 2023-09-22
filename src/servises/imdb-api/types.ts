export interface IMovie {
  id: string;
}

export interface ISearchResponse {
  results: Array<IMovie>;
  errorMessage: string;
}

export interface IGetMoviesParameters {
  count: number;
  title: string;
  genre: string;
}
