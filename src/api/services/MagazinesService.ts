/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { magazines } from '../models/magazines';
import type { magazines_query_orderby } from '../models/magazines_query_orderby';
import type { search_query_sort } from '../models/search_query_sort';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MagazinesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns magazines Returns magazines collection
   * @throws ApiError
   */
  public getMagazines({
    page,
    limit,
    q,
    orderBy,
    sort,
    letter,
  }: {
    page?: number;
    limit?: number;
    q?: string;
    orderBy?: magazines_query_orderby;
    sort?: search_query_sort;
    /**
     * Return entries starting with the given letter
     */
    letter?: string;
  }): CancelablePromise<magazines> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/magazines',
      query: {
        page: page,
        limit: limit,
        q: q,
        order_by: orderBy,
        sort: sort,
        letter: letter,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}
