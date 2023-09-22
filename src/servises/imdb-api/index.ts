import globalConfig from '@constants/global.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareURLParams } from '@src/servises/imdb-api/prepareURLParams';
import { IGetMoviesParameters, IMovie, ISearchResponse } from '@src/servises/imdb-api/types';

export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: globalConfig.DOMAIN_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], IGetMoviesParameters>({
      async queryFn(args, __, ___, fetchWithBQ) {
        const urlParams = prepareURLParams(args);
        const testUrlParams = prepareURLParams({ ...args, count: args.count + 1 });
        const arrRes = await Promise.allSettled([
          fetchWithBQ('/AdvancedSearch/' + globalConfig.API_KEY + '?' + urlParams.toString()),
          fetchWithBQ('/AdvancedSearch/' + globalConfig.API_KEY + '?' + testUrlParams.toString()),
        ]);

        if (arrRes[0].status === 'rejected') {
          throw arrRes[0].reason;
        }
        if (arrRes[1].status === 'rejected') {
          throw arrRes[1].reason;
        }

        const { data: resData, error } = arrRes[0].value;
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
      query: (name: string) => `/Title/${globalConfig.API_KEY ?? 'key'}/${name}/Trailer,`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetInfoQuery } = imdbApi;
