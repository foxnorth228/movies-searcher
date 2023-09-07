import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IMovie {
  id: string;
}

interface ISearchResponse {
  results: Array<IMovie>;
  errorMessage: string;
}

export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], { count: number; title: string }>({
      async queryFn(args, __, ___, fetchWithBQ) {
        const apiKey = process.env.API_KEY ?? '';
        const urlParams = new URLSearchParams();
        urlParams.append('title_type', 'tv_movie');
        urlParams.append('count', String(args.count));
        urlParams.append('title', args.title);
        const url = '/AdvancedSearch/' + apiKey + '?' + urlParams.toString();
        const res = await fetchWithBQ(url);

        const { data: resData, error } = res;
        const data = resData as ISearchResponse;
        if (error) {
          return { error };
        }
        if (data.errorMessage && data.errorMessage !== '') {
          return {
            error: {
              status: 400,
              statusText: data.errorMessage,
              data: data.errorMessage,
            },
          };
        }
        return {
          data: data.results.map((el) => {
            return { id: el.id };
          }),
        };
      },
    }),
    getInfo: builder.query<object, string>({
      query: (name: string) => `/Title/${process.env.API_KEY ?? ''}/${name}/Trailer,`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetInfoQuery } = imdbApi;
