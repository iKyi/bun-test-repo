/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user_images } from './user_images';
/**
 * Club Member
 */
export type club_member = {
  data?: Array<{
    /**
     * User's username
     */
    username?: string;
    /**
     * User URL
     */
    url?: string;
    images?: user_images;
  }>;
};
