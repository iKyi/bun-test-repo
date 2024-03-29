/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { anime_meta } from '../models/anime_meta';
import type { anime_review } from '../models/anime_review';
import type { external_links } from '../models/external_links';
import type { manga_meta } from '../models/manga_meta';
import type { manga_review } from '../models/manga_review';
import type { pagination } from '../models/pagination';
import type { recommendations } from '../models/recommendations';
import type { user_about } from '../models/user_about';
import type { user_anime_list_status_filter } from '../models/user_anime_list_status_filter';
import type { user_by_id } from '../models/user_by_id';
import type { user_clubs } from '../models/user_clubs';
import type { user_favorites } from '../models/user_favorites';
import type { user_friends } from '../models/user_friends';
import type { user_history } from '../models/user_history';
import type { user_manga_list_status_filter } from '../models/user_manga_list_status_filter';
import type { user_meta } from '../models/user_meta';
import type { user_profile } from '../models/user_profile';
import type { user_profile_full } from '../models/user_profile_full';
import type { user_statistics } from '../models/user_statistics';
import type { user_updates } from '../models/user_updates';
import type { users_search } from '../models/users_search';
import type { users_search_query_gender } from '../models/users_search_query_gender';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns users_search Returns search results for users
   * @throws ApiError
   */
  public getUsersSearch({
    page,
    limit,
    q,
    gender,
    location,
    maxAge,
    minAge,
  }: {
    page?: number;
    limit?: number;
    q?: string;
    gender?: users_search_query_gender;
    location?: string;
    maxAge?: number;
    minAge?: number;
  }): CancelablePromise<users_search> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users',
      query: {
        page: page,
        limit: limit,
        q: q,
        gender: gender,
        location: location,
        maxAge: maxAge,
        minAge: minAge,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns username by ID search
   * @throws ApiError
   */
  public getUserById({ id }: { id: number }): CancelablePromise<{
    data?: user_by_id;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/userbyid/{id}',
      path: {
        id: id,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns complete user resource data
   * @throws ApiError
   */
  public getUserFullProfile({
    username,
  }: {
    username: string;
  }): CancelablePromise<{
    data?: user_profile_full;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/full',
      path: {
        username: username,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns user profile
   * @throws ApiError
   */
  public getUserProfile({ username }: { username: string }): CancelablePromise<{
    data?: user_profile;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}',
      path: {
        username: username,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns user_statistics Returns user statistics
   * @throws ApiError
   */
  public getUserStatistics({
    username,
  }: {
    username: string;
  }): CancelablePromise<user_statistics> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/statistics',
      path: {
        username: username,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns user favorites
   * @throws ApiError
   */
  public getUserFavorites({
    username,
  }: {
    username: string;
  }): CancelablePromise<{
    data?: user_favorites;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/favorites',
      path: {
        username: username,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns user_updates Returns user updates
   * @throws ApiError
   */
  public getUserUpdates({
    username,
  }: {
    username: string;
  }): CancelablePromise<user_updates> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/userupdates',
      path: {
        username: username,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns user_about Returns user about in raw HTML
   * @throws ApiError
   */
  public getUserAbout({
    username,
  }: {
    username: string;
  }): CancelablePromise<user_about> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/about',
      path: {
        username: username,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns user_history Returns user history (past 30 days)
   * @throws ApiError
   */
  public getUserHistory({
    username,
    type,
  }: {
    username: string;
    type?: 'anime' | 'manga';
  }): CancelablePromise<user_history> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/history',
      path: {
        username: username,
      },
      query: {
        type: type,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns user_friends Returns user friends
   * @throws ApiError
   */
  public getUserFriends({
    username,
    page,
  }: {
    username: string;
    page?: number;
  }): CancelablePromise<user_friends> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/friends',
      path: {
        username: username,
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
   * @deprecated
   * User Anime lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
   * @returns any Returns user anime list
   * @throws ApiError
   */
  public getUserAnimelist({
    username,
    status,
  }: {
    username: string;
    status?: user_anime_list_status_filter;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/animelist',
      path: {
        username: username,
      },
      query: {
        status: status,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @deprecated
   * User Manga lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>
   * @returns any Returns user manga list
   * @throws ApiError
   */
  public getUserMangaList({
    username,
    status,
  }: {
    username: string;
    status?: user_manga_list_status_filter;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/mangalist',
      path: {
        username: username,
      },
      query: {
        status: status,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
  /**
   * @returns any Returns user reviews
   * @throws ApiError
   */
  public getUserReviews({
    username,
    page,
  }: {
    username: string;
    page?: number;
  }): CancelablePromise<{
    data?: {
      data?: Array<
        | ({
            user?: user_meta;
          } & {
            anime?: anime_meta;
          } & anime_review)
        | ({
            user?: user_meta;
          } & {
            manga?: manga_meta;
          } & manga_review)
      >;
    } & pagination;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/reviews',
      path: {
        username: username,
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
   * @returns recommendations Returns Recent Anime Recommendations
   * @throws ApiError
   */
  public getUserRecommendations({
    username,
    page,
  }: {
    username: string;
    page?: number;
  }): CancelablePromise<recommendations> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/recommendations',
      path: {
        username: username,
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
   * @returns user_clubs Returns user clubs
   * @throws ApiError
   */
  public getUserClubs({
    username,
    page,
  }: {
    username: string;
    page?: number;
  }): CancelablePromise<user_clubs> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/clubs',
      path: {
        username: username,
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
   * @returns external_links Returns user's external links
   * @throws ApiError
   */
  public getUserExternal({
    username,
  }: {
    username: string;
  }): CancelablePromise<external_links> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{username}/external',
      path: {
        username: username,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}
