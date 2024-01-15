/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { watch_episodes } from '../models/watch_episodes';
import type { watch_promos } from '../models/watch_promos';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WatchService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns watch_episodes Returns Recently Added Episodes
   * @throws ApiError
   */
  public getWatchRecentEpisodes(): CancelablePromise<watch_episodes> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/watch/episodes',
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns watch_episodes Returns Popular Episodes
   * @throws ApiError
   */
  public getWatchPopularEpisodes(): CancelablePromise<watch_episodes> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/watch/episodes/popular',
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns watch_promos Returns Recently Added Promotional Videos
   * @throws ApiError
   */
  public getWatchRecentPromos({
    page,
  }: {
    page?: number;
  }): CancelablePromise<watch_promos> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/watch/promos',
      query: {
        page: page,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns watch_promos Returns Popular Promotional Videos
   * @throws ApiError
   */
  public getWatchPopularPromos(): CancelablePromise<watch_promos> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/watch/promos/popular',
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}
