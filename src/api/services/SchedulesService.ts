/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
import type { schedules } from '../models/schedules';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SchedulesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @param page
   * @param filter Filter by day
   * @param kids When supplied, it will filter entries with the `Kids` Genre Demographic. When supplied as `kids=true`, it will return only Kid entries and when supplied as `kids=false`, it will filter out any Kid entries. Defaults to `false`.
   * @param sfw 'Safe For Work'. When supplied, it will filter entries with the `Hentai` Genre. When supplied as `sfw=true`, it will return only SFW entries and when supplied as `sfw=false`, it will filter out any Hentai entries. Defaults to `false`.
   * @param sfw 'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw`
   * @param unapproved This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`
   * @param page
   * @param limit
   * @returns schedules Returns weekly schedule
   * @throws ApiError
   */
  public getSchedules(
    page?: number,
    filter?:
      | 'monday'
      | 'tuesday'
      | 'wednesday'
      | 'thursday'
      | 'friday'
      | 'unknown'
      | 'other',
    kids?: 'true' | 'false',
    sfw?: 'true' | 'false',
    sfw?: boolean,
    unapproved?: boolean,
    page?: number,
    limit?: number
  ): CancelablePromise<schedules> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/schedules',
      query: {
        page: page,
        filter: filter,
        kids: kids,
        sfw: sfw,
        sfw: sfw,
        unapproved: unapproved,
        page: page,
        limit: limit,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}
