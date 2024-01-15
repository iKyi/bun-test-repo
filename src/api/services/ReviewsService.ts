/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReviewsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Returns recent anime reviews
   * @throws ApiError
   */
  public getRecentAnimeReviews({
    page,
    preliminary,
    spoiler,
  }: {
    page?: number;
    /**
     * Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`
     */
    preliminary?: boolean;
    /**
     * Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`
     */
    spoiler?: boolean;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/reviews/anime',
      query: {
        page: page,
        preliminary: preliminary,
        spoiler: spoiler,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns recent manga reviews
   * @throws ApiError
   */
  public getRecentMangaReviews({
    page,
    preliminary,
    spoiler,
  }: {
    page?: number;
    /**
     * Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`
     */
    preliminary?: boolean;
    /**
     * Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`
     */
    spoiler?: boolean;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/reviews/manga',
      query: {
        page: page,
        preliminary: preliminary,
        spoiler: spoiler,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}
