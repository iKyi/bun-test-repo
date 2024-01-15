/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { genre_query_filter } from '../models/genre_query_filter';
import type { genres } from '../models/genres';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GenresService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns genres Returns entry genres, explicit_genres, themes and demographics
   * @throws ApiError
   */
  public getAnimeGenres({
    filter,
  }: {
    filter?: genre_query_filter;
  }): CancelablePromise<genres> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/genres/anime',
      query: {
        filter: filter,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns genres Returns entry genres, explicit_genres, themes and demographics
   * @throws ApiError
   */
  public getMangaGenres({
    filter,
  }: {
    filter?: genre_query_filter;
  }): CancelablePromise<genres> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/genres/manga',
      query: {
        filter: filter,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}
