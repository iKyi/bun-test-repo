/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Anime Statistics Resource
 */
export type anime_statistics = {
  data?: {
    /**
     * Number of users watching the resource
     */
    watching?: number;
    /**
     * Number of users who have completed the resource
     */
    completed?: number;
    /**
     * Number of users who have put the resource on hold
     */
    on_hold?: number;
    /**
     * Number of users who have dropped the resource
     */
    dropped?: number;
    /**
     * Number of users who have planned to watch the resource
     */
    plan_to_watch?: number;
    /**
     * Total number of users who have the resource added to their lists
     */
    total?: number;
    scores?: Array<{
      /**
       * Scoring value
       */
      score?: number;
      /**
       * Number of votes for this score
       */
      votes?: number;
      /**
       * Percentage of votes for this score
       */
      percentage?: number;
    }>;
  };
};
