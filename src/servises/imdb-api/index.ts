import globalConfig from '@constants/global.config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { imdbMaxCount } from '@src/servises/imdb-api/config';
import { prepareURLParams } from '@src/servises/imdb-api/prepareURLParams';
import {
  IGetMoviesData,
  IGetMoviesParameters, IGetMoviesTitleData, IGetMoviesTitleResponse, IGetMoviesTitleResponseData,
  ISearchResponse,
} from '@src/servises/imdb-api/types';

export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: globalConfig.DOMAIN_URL }),
  endpoints: (builder) => ({
    getMoviesTitle: builder.query<IGetMoviesTitleData, IGetMoviesParameters>({
      async queryFn(args, __, ___, fetchWithBQ) {
        const urlParams = prepareURLParams(args);
        const res = await fetchWithBQ(
          '/AdvancedSearch/' + globalConfig.API_KEY + '?' + urlParams.toString()
        );
        const { data, error } = res as IGetMoviesTitleResponse;
        if (error) {
          return { error };
        } else if (data.errorMessage && data.errorMessage !== '') {
          return {
            error: {
              status: 400,
              statusText: data.errorMessage,
              data: data.errorMessage,
            },
          };
        }
        return {
          data: {
            titles: data.results.map((el) => el.title),
          },
        };
      },
    }),
    getMovies: builder.query<IGetMoviesData, IGetMoviesParameters>({
      async queryFn(args, __, ___, fetchWithBQ) {
        const objParams = { ...args };
        if (objParams.count > imdbMaxCount) {
          objParams.count = imdbMaxCount;
        }

        const urlParams = prepareURLParams(objParams);
        const testUrlParams = prepareURLParams({ ...objParams, count: objParams.count + 1 });
        const arrRes = await Promise.allSettled([
          fetchWithBQ('/AdvancedSearch/' + globalConfig.API_KEY + '?' + urlParams.toString()),
          fetchWithBQ('/AdvancedSearch/' + globalConfig.API_KEY + '?' + testUrlParams.toString()),
        ]);

        if (arrRes[0].status === 'rejected') {
          throw arrRes[0].reason;
        } else if (arrRes[1].status === 'rejected') {
          throw arrRes[1].reason;
        }
        const { data, error } = arrRes[0].value as ISearchResponse;
        const { data: testData } = arrRes[1].value as ISearchResponse;

        if (error) {
          return { error };
        } else if (data.errorMessage && data.errorMessage !== '') {
          return {
            error: {
              status: 400,
              statusText: data.errorMessage,
              data: data.errorMessage,
            },
          };
        }
        return {
          data: {
            movies: data.results.map((el) => {
              return { id: el.id };
            }),
            isLastData:
              data.results.length === 0 ||
              objParams.count === imdbMaxCount ||
              data.results.length === testData.results.length,
          },
        };
      },
    }),
    getInfo: builder.query<object, string>({
      query: (name: string) => `/Title/${globalConfig.API_KEY ?? 'key'}/${name}/Trailer,`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetInfoQuery, useGetMoviesTitleQuery } = imdbApi;
