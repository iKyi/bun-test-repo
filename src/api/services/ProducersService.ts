/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { external_links } from '../models/external_links';
import type { producer } from '../models/producer';
import type { producer_full } from '../models/producer_full';
import type { producers } from '../models/producers';
import type { producers_query_orderby } from '../models/producers_query_orderby';
import type { search_query_sort } from '../models/search_query_sort';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProducersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Returns producer resource
   * @throws ApiError
   */
  public getProducerById({ id }: { id: number }): CancelablePromise<{
    data?: producer;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/producers/{id}',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns producer resource
   * @throws ApiError
   */
  public getProducerFullById({ id }: { id: number }): CancelablePromise<{
    data?: producer_full;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/producers/{id}/full',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns external_links Returns producer's external links
   * @throws ApiError
   */
  public getProducerExternal({
    id,
  }: {
    id: number;
  }): CancelablePromise<external_links> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/producers/{id}/external',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns producers Returns producers collection
   * @throws ApiError
   */
  public getProducers({
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
    orderBy?: producers_query_orderby;
    sort?: search_query_sort;
    /**
     * Return entries starting with the given letter
     */
    letter?: string;
  }): CancelablePromise<producers> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/producers',
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
