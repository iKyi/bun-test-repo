/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { people_search } from '../models/people_search';
import type { people_search_query_orderby } from '../models/people_search_query_orderby';
import type { person } from '../models/person';
import type { person_anime } from '../models/person_anime';
import type { person_full } from '../models/person_full';
import type { person_manga } from '../models/person_manga';
import type { person_pictures } from '../models/person_pictures';
import type { person_voice_acting_roles } from '../models/person_voice_acting_roles';
import type { search_query_sort } from '../models/search_query_sort';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PeopleService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Returns complete character resource data
   * @throws ApiError
   */
  public getPersonFullById({ id }: { id: number }): CancelablePromise<{
    data?: person_full;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/people/{id}/full',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns pictures related to the entry
   * @throws ApiError
   */
  public getPersonById({ id }: { id: number }): CancelablePromise<{
    data?: person;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/people/{id}',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns person_anime Returns person's anime staff positions
   * @throws ApiError
   */
  public getPersonAnime({
    id,
  }: {
    id: number;
  }): CancelablePromise<person_anime> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/people/{id}/anime',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns person_voice_acting_roles Returns person's voice acting roles
   * @throws ApiError
   */
  public getPersonVoices({
    id,
  }: {
    id: number;
  }): CancelablePromise<person_voice_acting_roles> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/people/{id}/voices',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns person_manga Returns person's published manga works
   * @throws ApiError
   */
  public getPersonManga({
    id,
  }: {
    id: number;
  }): CancelablePromise<person_manga> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/people/{id}/manga',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns person_pictures Returns a list of pictures of the person
   * @throws ApiError
   */
  public getPersonPictures({
    id,
  }: {
    id: number;
  }): CancelablePromise<person_pictures> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/people/{id}/pictures',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns people_search Returns search results for people
   * @throws ApiError
   */
  public getPeopleSearch({
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
    orderBy?: people_search_query_orderby;
    sort?: search_query_sort;
    /**
     * Return entries starting with the given letter
     */
    letter?: string;
  }): CancelablePromise<people_search> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/people',
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
