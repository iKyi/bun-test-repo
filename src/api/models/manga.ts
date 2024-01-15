/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { daterange } from './daterange';
import type { mal_url } from './mal_url';
import type { manga_images } from './manga_images';
import type { title } from './title';
/**
 * Manga Resource
 */
export type manga = {
  /**
   * MyAnimeList ID
   */
  mal_id?: number;
  /**
   * MyAnimeList URL
   */
  url?: string;
  images?: manga_images;
  /**
   * Whether the entry is pending approval on MAL or not
   */
  approved?: boolean;
  /**
   * All Titles
   */
  titles?: Array<title>;
  /**
   * Title
   * @deprecated
   */
  title?: string;
  /**
   * English Title
   * @deprecated
   */
  title_english?: string | null;
  /**
   * Japanese Title
   * @deprecated
   */
  title_japanese?: string | null;
  /**
   * Manga Type
   */
  type?:
    | 'Manga'
    | 'Novel'
    | 'Light Novel'
    | 'One-shot'
    | 'Doujinshi'
    | 'Manhua'
    | 'Manhwa'
    | 'OEL'
    | null;
  /**
   * Chapter count
   */
  chapters?: number | null;
  /**
   * Volume count
   */
  volumes?: number | null;
  /**
   * Publishing status
   */
  status?:
    | 'Finished'
    | 'Publishing'
    | 'On Hiatus'
    | 'Discontinued'
    | 'Not yet published';
  /**
   * Publishing boolean
   */
  publishing?: boolean;
  published?: daterange;
  /**
   * Score
   */
  score?: number | null;
  /**
   * Number of users
   */
  scored_by?: number | null;
  /**
   * Ranking
   */
  rank?: number | null;
  /**
   * Popularity
   */
  popularity?: number | null;
  /**
   * Number of users who have added this entry to their list
   */
  members?: number | null;
  /**
   * Number of users who have favorited this entry
   */
  favorites?: number | null;
  /**
   * Synopsis
   */
  synopsis?: string | null;
  /**
   * Background
   */
  background?: string | null;
  authors?: Array<mal_url>;
  serializations?: Array<mal_url>;
  genres?: Array<mal_url>;
  explicit_genres?: Array<mal_url>;
  themes?: Array<mal_url>;
  demographics?: Array<mal_url>;
};
