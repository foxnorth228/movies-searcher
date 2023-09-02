import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ISearchResponse {
  results: Array<{
    id: string;
  }>;
}

export interface IMovie {
  id: string;
}
export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], void>({
      async queryFn(arg, queryApi, extraOptions, fetchWithBQ) {
        const apiKey = process.env.API_KEY ?? '';
        const url = new URLSearchParams();
        url.append('title_type', 'tv_movie');
        const res = await fetchWithBQ('/AdvancedSearch/' + apiKey + '?' + url.toString());
        const results = (res.data as ISearchResponse).results;
        return {
          data: results.map((el) => {
            return { id: el.id };
          }),
        };
      },
    }),
    getInfo: builder.query<object, string>({
      query: (name: string) =>
        `/Title/${process.env.API_KEY ?? ''}/${name}/Trailer,`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetInfoQuery } = imdbApi;
export const selectMovies = imdbApi.endpoints.getMovies.select();
