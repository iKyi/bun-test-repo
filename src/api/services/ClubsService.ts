/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { club } from '../models/club';
import type { club_member } from '../models/club_member';
import type { club_relations } from '../models/club_relations';
import type { club_search_query_category } from '../models/club_search_query_category';
import type { club_search_query_orderby } from '../models/club_search_query_orderby';
import type { club_search_query_type } from '../models/club_search_query_type';
import type { club_staff } from '../models/club_staff';
import type { clubs_search } from '../models/clubs_search';
import type { pagination } from '../models/pagination';
import type { search_query_sort } from '../models/search_query_sort';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClubsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Returns Club Resource
   * @throws ApiError
   */
  public getClubsById({ id }: { id: number }): CancelablePromise<{
    data?: club;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/clubs/{id}',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns Club Members Resource
   * @throws ApiError
   */
  public getClubMembers({
    id,
    page,
  }: {
    id: number;
    page?: number;
  }): CancelablePromise<pagination & club_member> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/clubs/{id}/members',
      path: {
        id: id,
      },
      query: {
        page: page,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns club_staff Returns Club Staff
   * @throws ApiError
   */
  public getClubStaff({ id }: { id: number }): CancelablePromise<club_staff> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/clubs/{id}/staff',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns club_relations Returns Club Relations
   * @throws ApiError
   */
  public getClubRelations({
    id,
  }: {
    id: number;
  }): CancelablePromise<club_relations> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/clubs/{id}/relations',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns clubs_search Returns search results for clubs
   * @throws ApiError
   */
  public getClubsSearch({
    page,
    limit,
    q,
    type,
    category,
    orderBy,
    sort,
    letter,
  }: {
    page?: number;
    limit?: number;
    q?: string;
    type?: club_search_query_type;
    category?: club_search_query_category;
    orderBy?: club_search_query_orderby;
    sort?: search_query_sort;
    /**
     * Return entries starting with the given letter
     */
    letter?: string;
  }): CancelablePromise<clubs_search> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/clubs',
      query: {
        page: page,
        limit: limit,
        q: q,
        type: type,
        category: category,
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
