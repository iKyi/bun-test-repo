/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { anime_images } from './anime_images';
import type { broadcast } from './broadcast';
import type { daterange } from './daterange';
import type { mal_url } from './mal_url';
import type { title } from './title';
import type { trailer_base } from './trailer_base';
/**
 * Full anime Resource
 */
export type anime_full = {
  /**
   * MyAnimeList ID
   */
  mal_id?: number;
  /**
   * MyAnimeList URL
   */
  url?: string;
  images?: anime_images;
  trailer?: trailer_base;
  /**
   * Whether the entry is pending approval on MAL or not
   */
  approved?: boolean;
  /**
   * All titles
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
   * Other Titles
   * @deprecated
   */
  title_synonyms?: Array<string>;
  /**
   * Anime Type
   */
  type?: 'TV' | 'OVA' | 'Movie' | 'Special' | 'ONA' | 'Music' | null;
  /**
   * Original Material/Source adapted from
   */
  source?: string | null;
  /**
   * Episode count
   */
  episodes?: number | null;
  /**
   * Airing status
   */
  status?: 'Finished Airing' | 'Currently Airing' | 'Not yet aired' | null;
  /**
   * Airing boolean
   */
  airing?: boolean;
  aired?: daterange;
  /**
   * Parsed raw duration
   */
  duration?: string | null;
  /**
   * Anime audience rating
   */
  rating?:
    | 'G - All Ages'
    | 'PG - Children'
    | 'PG-13 - Teens 13 or older'
    | 'R - 17+ (violence & profanity)'
    | 'R+ - Mild Nudity'
    | 'Rx - Hentai'
    | null;
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
  /**
   * Season
   */
  season?: 'summer' | 'winter' | 'spring' | 'fall' | null;
  /**
   * Year
   */
  year?: number | null;
  broadcast?: broadcast;
  producers?: Array<mal_url>;
  licensors?: Array<mal_url>;
  studios?: Array<mal_url>;
  genres?: Array<mal_url>;
  explicit_genres?: Array<mal_url>;
  themes?: Array<mal_url>;
  demographics?: Array<mal_url>;
  relations?: Array<{
    /**
     * Relation type
     */
    relation?: string;
    entry?: Array<mal_url>;
  }>;
  theme?: {
    openings?: Array<string>;
    endings?: Array<string>;
  };
  external?: Array<{
    name?: string;
    url?: string;
  }>;
  streaming?: Array<{
    name?: string;
    url?: string;
  }>;
};
