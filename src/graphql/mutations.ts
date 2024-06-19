/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTitle = /* GraphQL */ `mutation CreateTitle(
  $input: CreateTitleInput!
  $condition: ModelTitleConditionInput
) {
  createTitle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTitleMutationVariables,
  APITypes.CreateTitleMutation
>;
export const updateTitle = /* GraphQL */ `mutation UpdateTitle(
  $input: UpdateTitleInput!
  $condition: ModelTitleConditionInput
) {
  updateTitle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTitleMutationVariables,
  APITypes.UpdateTitleMutation
>;
export const deleteTitle = /* GraphQL */ `mutation DeleteTitle(
  $input: DeleteTitleInput!
  $condition: ModelTitleConditionInput
) {
  deleteTitle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTitleMutationVariables,
  APITypes.DeleteTitleMutation
>;
export const createArtist = /* GraphQL */ `mutation CreateArtist(
  $input: CreateArtistInput!
  $condition: ModelArtistConditionInput
) {
  createArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArtistMutationVariables,
  APITypes.CreateArtistMutation
>;
export const updateArtist = /* GraphQL */ `mutation UpdateArtist(
  $input: UpdateArtistInput!
  $condition: ModelArtistConditionInput
) {
  updateArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArtistMutationVariables,
  APITypes.UpdateArtistMutation
>;
export const deleteArtist = /* GraphQL */ `mutation DeleteArtist(
  $input: DeleteArtistInput!
  $condition: ModelArtistConditionInput
) {
  deleteArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArtistMutationVariables,
  APITypes.DeleteArtistMutation
>;
export const createAlbum = /* GraphQL */ `mutation CreateAlbum(
  $input: CreateAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  createAlbum(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAlbumMutationVariables,
  APITypes.CreateAlbumMutation
>;
export const updateAlbum = /* GraphQL */ `mutation UpdateAlbum(
  $input: UpdateAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  updateAlbum(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAlbumMutationVariables,
  APITypes.UpdateAlbumMutation
>;
export const deleteAlbum = /* GraphQL */ `mutation DeleteAlbum(
  $input: DeleteAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  deleteAlbum(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAlbumMutationVariables,
  APITypes.DeleteAlbumMutation
>;
export const createSong = /* GraphQL */ `mutation CreateSong(
  $input: CreateSongInput!
  $condition: ModelSongConditionInput
) {
  createSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSongMutationVariables,
  APITypes.CreateSongMutation
>;
export const updateSong = /* GraphQL */ `mutation UpdateSong(
  $input: UpdateSongInput!
  $condition: ModelSongConditionInput
) {
  updateSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSongMutationVariables,
  APITypes.UpdateSongMutation
>;
export const deleteSong = /* GraphQL */ `mutation DeleteSong(
  $input: DeleteSongInput!
  $condition: ModelSongConditionInput
) {
  deleteSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSongMutationVariables,
  APITypes.DeleteSongMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPlaylist = /* GraphQL */ `mutation CreatePlaylist(
  $input: CreatePlaylistInput!
  $condition: ModelPlaylistConditionInput
) {
  createPlaylist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePlaylistMutationVariables,
  APITypes.CreatePlaylistMutation
>;
export const updatePlaylist = /* GraphQL */ `mutation UpdatePlaylist(
  $input: UpdatePlaylistInput!
  $condition: ModelPlaylistConditionInput
) {
  updatePlaylist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePlaylistMutationVariables,
  APITypes.UpdatePlaylistMutation
>;
export const deletePlaylist = /* GraphQL */ `mutation DeletePlaylist(
  $input: DeletePlaylistInput!
  $condition: ModelPlaylistConditionInput
) {
  deletePlaylist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePlaylistMutationVariables,
  APITypes.DeletePlaylistMutation
>;
