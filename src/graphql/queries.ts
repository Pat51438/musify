/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userID
    username
    name
    photo
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      username
      name
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      username
      name
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    user {
      id
      userID
      username
      name
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    userProfileId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userProfileUserId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userProfileId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileUserId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const syncUserProfiles = /* GraphQL */ `query SyncUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserProfiles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userProfileId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileUserId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserProfilesQueryVariables,
  APITypes.SyncUserProfilesQuery
>;
