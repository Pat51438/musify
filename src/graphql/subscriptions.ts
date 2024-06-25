/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
