/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTitle = /* GraphQL */ `subscription OnCreateTitle($filter: ModelSubscriptionTitleFilterInput) {
  onCreateTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTitleSubscriptionVariables,
  APITypes.OnCreateTitleSubscription
>;
export const onUpdateTitle = /* GraphQL */ `subscription OnUpdateTitle($filter: ModelSubscriptionTitleFilterInput) {
  onUpdateTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTitleSubscriptionVariables,
  APITypes.OnUpdateTitleSubscription
>;
export const onDeleteTitle = /* GraphQL */ `subscription OnDeleteTitle($filter: ModelSubscriptionTitleFilterInput) {
  onDeleteTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTitleSubscriptionVariables,
  APITypes.OnDeleteTitleSubscription
>;
export const onCreateArtist = /* GraphQL */ `subscription OnCreateArtist($filter: ModelSubscriptionArtistFilterInput) {
  onCreateArtist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArtistSubscriptionVariables,
  APITypes.OnCreateArtistSubscription
>;
export const onUpdateArtist = /* GraphQL */ `subscription OnUpdateArtist($filter: ModelSubscriptionArtistFilterInput) {
  onUpdateArtist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArtistSubscriptionVariables,
  APITypes.OnUpdateArtistSubscription
>;
export const onDeleteArtist = /* GraphQL */ `subscription OnDeleteArtist($filter: ModelSubscriptionArtistFilterInput) {
  onDeleteArtist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArtistSubscriptionVariables,
  APITypes.OnDeleteArtistSubscription
>;
export const onCreateAlbum = /* GraphQL */ `subscription OnCreateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onCreateAlbum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAlbumSubscriptionVariables,
  APITypes.OnCreateAlbumSubscription
>;
export const onUpdateAlbum = /* GraphQL */ `subscription OnUpdateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onUpdateAlbum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAlbumSubscriptionVariables,
  APITypes.OnUpdateAlbumSubscription
>;
export const onDeleteAlbum = /* GraphQL */ `subscription OnDeleteAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onDeleteAlbum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAlbumSubscriptionVariables,
  APITypes.OnDeleteAlbumSubscription
>;
export const onCreateSong = /* GraphQL */ `subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
  onCreateSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSongSubscriptionVariables,
  APITypes.OnCreateSongSubscription
>;
export const onUpdateSong = /* GraphQL */ `subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
  onUpdateSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSongSubscriptionVariables,
  APITypes.OnUpdateSongSubscription
>;
export const onDeleteSong = /* GraphQL */ `subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
  onDeleteSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSongSubscriptionVariables,
  APITypes.OnDeleteSongSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePlaylist = /* GraphQL */ `subscription OnCreatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
  onCreatePlaylist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlaylistSubscriptionVariables,
  APITypes.OnCreatePlaylistSubscription
>;
export const onUpdatePlaylist = /* GraphQL */ `subscription OnUpdatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
  onUpdatePlaylist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlaylistSubscriptionVariables,
  APITypes.OnUpdatePlaylistSubscription
>;
export const onDeletePlaylist = /* GraphQL */ `subscription OnDeletePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
  onDeletePlaylist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlaylistSubscriptionVariables,
  APITypes.OnDeletePlaylistSubscription
>;
