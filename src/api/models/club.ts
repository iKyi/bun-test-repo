/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_images } from './common_images';
/**
 * Club Resource
 */
export type club = {
  /**
   * MyAnimeList ID
   */
  mal_id?: number;
  /**
   * Club name
   */
  name?: string;
  /**
   * Club URL
   */
  url?: string;
  images?: common_images;
  /**
   * Number of club members
   */
  members?: number;
  /**
   * Club Category
   */
  category?:
    | 'actors & artists'
    | 'anime'
    | 'characters'
    | 'cities & neighborhoods'
    | 'companies'
    | 'conventions'
    | 'games'
    | 'japan'
    | 'manga'
    | 'music'
    | 'others'
    | 'schools';
  /**
   * Date Created ISO8601
   */
  created?: string;
  /**
   * Club access
   */
  access?: 'public' | 'private' | 'secret';
};
