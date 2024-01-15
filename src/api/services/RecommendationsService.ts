/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { recommendations } from '../models/recommendations';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RecommendationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns recommendations Returns recent anime recommendations
   * @throws ApiError
   */
  public getRecentAnimeRecommendations({
    page,
  }: {
    page?: number;
  }): CancelablePromise<recommendations> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/recommendations/anime',
      query: {
        page: page,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns recommendations Returns recent manga recommendations
   * @throws ApiError
   */
  public getRecentMangaRecommendations({
    page,
  }: {
    page?: number;
  }): CancelablePromise<recommendations> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/recommendations/manga',
      query: {
        page: page,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}
