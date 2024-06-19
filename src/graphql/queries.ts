/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTitle = /* GraphQL */ `query GetTitle($id: ID!) {
  getTitle(id: $id) {
    id
    name
    song {
      id
      genre
      duration
      createdAt
      updatedAt
      artistSongId
      albumSongsId
      playlistSongsId
      songTitleId
      __typename
    }
    album {
      id
      name
      image
      createdAt
      updatedAt
      artistAlbumsId
      __typename
    }
    createdAt
    updatedAt
    titleSongId
    titleAlbumId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTitleQueryVariables, APITypes.GetTitleQuery>;
export const listTitles = /* GraphQL */ `query ListTitles(
  $filter: ModelTitleFilterInput
  $limit: Int
  $nextToken: String
) {
  listTitles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      titleSongId
      titleAlbumId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTitlesQueryVariables,
  APITypes.ListTitlesQuery
>;
export const getArtist = /* GraphQL */ `query GetArtist($id: ID!) {
  getArtist(id: $id) {
    id
    artistName
    albums {
      nextToken
      __typename
    }
    song {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetArtistQueryVariables, APITypes.GetArtistQuery>;
export const listArtists = /* GraphQL */ `query ListArtists(
  $filter: ModelArtistFilterInput
  $limit: Int
  $nextToken: String
) {
  listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      artistName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArtistsQueryVariables,
  APITypes.ListArtistsQuery
>;
export const getAlbum = /* GraphQL */ `query GetAlbum($id: ID!) {
  getAlbum(id: $id) {
    id
    name
    image
    artist {
      id
      artistName
      createdAt
      updatedAt
      __typename
    }
    songs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    artistAlbumsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAlbumQueryVariables, APITypes.GetAlbumQuery>;
export const listAlbums = /* GraphQL */ `query ListAlbums(
  $filter: ModelAlbumFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      createdAt
      updatedAt
      artistAlbumsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAlbumsQueryVariables,
  APITypes.ListAlbumsQuery
>;
export const getSong = /* GraphQL */ `query GetSong($id: ID!) {
  getSong(id: $id) {
    id
    genre
    duration
    title {
      id
      name
      createdAt
      updatedAt
      titleSongId
      titleAlbumId
      __typename
    }
    artist {
      id
      artistName
      createdAt
      updatedAt
      __typename
    }
    album {
      id
      name
      image
      createdAt
      updatedAt
      artistAlbumsId
      __typename
    }
    createdAt
    updatedAt
    artistSongId
    albumSongsId
    playlistSongsId
    songTitleId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSongQueryVariables, APITypes.GetSongQuery>;
export const listSongs = /* GraphQL */ `query ListSongs(
  $filter: ModelSongFilterInput
  $limit: Int
  $nextToken: String
) {
  listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      genre
      duration
      createdAt
      updatedAt
      artistSongId
      albumSongsId
      playlistSongsId
      songTitleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListSongsQueryVariables, APITypes.ListSongsQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userID
    username
    playlist {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getPlaylist = /* GraphQL */ `query GetPlaylist($id: ID!) {
  getPlaylist(id: $id) {
    id
    playlistName
    songs {
      nextToken
      __typename
    }
    playlistOwner {
      id
      userID
      username
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userPlaylistId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPlaylistQueryVariables,
  APITypes.GetPlaylistQuery
>;
export const listPlaylists = /* GraphQL */ `query ListPlaylists(
  $filter: ModelPlaylistFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      playlistName
      createdAt
      updatedAt
      userPlaylistId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlaylistsQueryVariables,
  APITypes.ListPlaylistsQuery
>;
