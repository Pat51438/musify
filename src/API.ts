/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTitleInput = {
  id?: string | null,
  name: string,
  titleSongId?: string | null,
  titleAlbumId?: string | null,
};

export type ModelTitleConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTitleConditionInput | null > | null,
  or?: Array< ModelTitleConditionInput | null > | null,
  not?: ModelTitleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  titleSongId?: ModelIDInput | null,
  titleAlbumId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Title = {
  __typename: "Title",
  id: string,
  name: string,
  song?: Song | null,
  album?: Album | null,
  createdAt: string,
  updatedAt: string,
  titleSongId?: string | null,
  titleAlbumId?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  genre?: string | null,
  duration?: number | null,
  title?: Title | null,
  artist?: Artist | null,
  album?: Album | null,
  createdAt: string,
  updatedAt: string,
  artistSongId?: string | null,
  albumSongsId?: string | null,
  playlistSongsId?: string | null,
  songTitleId?: string | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  artistName: string,
  albums?: ModelAlbumConnection | null,
  song?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items:  Array<Album | null >,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  name: string,
  image?: string | null,
  artist?: Artist | null,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  artistAlbumsId?: string | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
};

export type UpdateTitleInput = {
  id: string,
  name?: string | null,
  titleSongId?: string | null,
  titleAlbumId?: string | null,
};

export type DeleteTitleInput = {
  id: string,
};

export type CreateArtistInput = {
  id?: string | null,
  artistName: string,
};

export type ModelArtistConditionInput = {
  artistName?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateArtistInput = {
  id: string,
  artistName?: string | null,
};

export type DeleteArtistInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  artistAlbumsId?: string | null,
};

export type ModelAlbumConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistAlbumsId?: ModelIDInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  artistAlbumsId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  genre?: string | null,
  duration?: number | null,
  artistSongId?: string | null,
  albumSongsId?: string | null,
  playlistSongsId?: string | null,
  songTitleId?: string | null,
};

export type ModelSongConditionInput = {
  genre?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistSongId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
  playlistSongsId?: ModelIDInput | null,
  songTitleId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSongInput = {
  id: string,
  genre?: string | null,
  duration?: number | null,
  artistSongId?: string | null,
  albumSongsId?: string | null,
  playlistSongsId?: string | null,
  songTitleId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  userID: string,
  username: string,
};

export type ModelUserConditionInput = {
  userID?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  userID: string,
  username: string,
  playlist?: ModelPlaylistConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlaylistConnection = {
  __typename: "ModelPlaylistConnection",
  items:  Array<Playlist | null >,
  nextToken?: string | null,
};

export type Playlist = {
  __typename: "Playlist",
  id: string,
  playlistName: string,
  songs?: ModelSongConnection | null,
  playlistOwner?: User | null,
  createdAt: string,
  updatedAt: string,
  userPlaylistId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  userID?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePlaylistInput = {
  id?: string | null,
  playlistName: string,
  userPlaylistId?: string | null,
};

export type ModelPlaylistConditionInput = {
  playlistName?: ModelStringInput | null,
  and?: Array< ModelPlaylistConditionInput | null > | null,
  or?: Array< ModelPlaylistConditionInput | null > | null,
  not?: ModelPlaylistConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userPlaylistId?: ModelIDInput | null,
};

export type UpdatePlaylistInput = {
  id: string,
  playlistName?: string | null,
  userPlaylistId?: string | null,
};

export type DeletePlaylistInput = {
  id: string,
};

export type ModelTitleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTitleFilterInput | null > | null,
  or?: Array< ModelTitleFilterInput | null > | null,
  not?: ModelTitleFilterInput | null,
  titleSongId?: ModelIDInput | null,
  titleAlbumId?: ModelIDInput | null,
};

export type ModelTitleConnection = {
  __typename: "ModelTitleConnection",
  items:  Array<Title | null >,
  nextToken?: string | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  artistName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items:  Array<Artist | null >,
  nextToken?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
  artistAlbumsId?: ModelIDInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  genre?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
  artistSongId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
  playlistSongsId?: ModelIDInput | null,
  songTitleId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPlaylistFilterInput = {
  id?: ModelIDInput | null,
  playlistName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlaylistFilterInput | null > | null,
  or?: Array< ModelPlaylistFilterInput | null > | null,
  not?: ModelPlaylistFilterInput | null,
  userPlaylistId?: ModelIDInput | null,
};

export type ModelSubscriptionTitleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTitleFilterInput | null > | null,
  or?: Array< ModelSubscriptionTitleFilterInput | null > | null,
  titleSongId?: ModelSubscriptionIDInput | null,
  titleAlbumId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionArtistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  artistName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  or?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  artistAlbumsId?: ModelSubscriptionIDInput | null,
  artistSongId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionAlbumFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
  albumSongsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionSongFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  genre?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongFilterInput | null > | null,
  songTitleId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userPlaylistId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionPlaylistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playlistName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaylistFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaylistFilterInput | null > | null,
  playlistSongsId?: ModelSubscriptionIDInput | null,
};

export type CreateTitleMutationVariables = {
  input: CreateTitleInput,
  condition?: ModelTitleConditionInput | null,
};

export type CreateTitleMutation = {
  createTitle?:  {
    __typename: "Title",
    id: string,
    name: string,
    song?:  {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    titleSongId?: string | null,
    titleAlbumId?: string | null,
  } | null,
};

export type UpdateTitleMutationVariables = {
  input: UpdateTitleInput,
  condition?: ModelTitleConditionInput | null,
};

export type UpdateTitleMutation = {
  updateTitle?:  {
    __typename: "Title",
    id: string,
    name: string,
    song?:  {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    titleSongId?: string | null,
    titleAlbumId?: string | null,
  } | null,
};

export type DeleteTitleMutationVariables = {
  input: DeleteTitleInput,
  condition?: ModelTitleConditionInput | null,
};

export type DeleteTitleMutation = {
  deleteTitle?:  {
    __typename: "Title",
    id: string,
    name: string,
    song?:  {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    titleSongId?: string | null,
    titleAlbumId?: string | null,
  } | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist?:  {
    __typename: "Artist",
    id: string,
    artistName: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    song?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist?:  {
    __typename: "Artist",
    id: string,
    artistName: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    song?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist?:  {
    __typename: "Artist",
    id: string,
    artistName: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    song?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    image?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    image?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    image?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    genre?: string | null,
    duration?: number | null,
    title?:  {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongId?: string | null,
    albumSongsId?: string | null,
    playlistSongsId?: string | null,
    songTitleId?: string | null,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    genre?: string | null,
    duration?: number | null,
    title?:  {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongId?: string | null,
    albumSongsId?: string | null,
    playlistSongsId?: string | null,
    songTitleId?: string | null,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    genre?: string | null,
    duration?: number | null,
    title?:  {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongId?: string | null,
    albumSongsId?: string | null,
    playlistSongsId?: string | null,
    songTitleId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    playlist?:  {
      __typename: "ModelPlaylistConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    playlist?:  {
      __typename: "ModelPlaylistConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    playlist?:  {
      __typename: "ModelPlaylistConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlaylistMutationVariables = {
  input: CreatePlaylistInput,
  condition?: ModelPlaylistConditionInput | null,
};

export type CreatePlaylistMutation = {
  createPlaylist?:  {
    __typename: "Playlist",
    id: string,
    playlistName: string,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    playlistOwner?:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlaylistId?: string | null,
  } | null,
};

export type UpdatePlaylistMutationVariables = {
  input: UpdatePlaylistInput,
  condition?: ModelPlaylistConditionInput | null,
};

export type UpdatePlaylistMutation = {
  updatePlaylist?:  {
    __typename: "Playlist",
    id: string,
    playlistName: string,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    playlistOwner?:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlaylistId?: string | null,
  } | null,
};

export type DeletePlaylistMutationVariables = {
  input: DeletePlaylistInput,
  condition?: ModelPlaylistConditionInput | null,
};

export type DeletePlaylistMutation = {
  deletePlaylist?:  {
    __typename: "Playlist",
    id: string,
    playlistName: string,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    playlistOwner?:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlaylistId?: string | null,
  } | null,
};

export type GetTitleQueryVariables = {
  id: string,
};

export type GetTitleQuery = {
  getTitle?:  {
    __typename: "Title",
    id: string,
    name: string,
    song?:  {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    titleSongId?: string | null,
    titleAlbumId?: string | null,
  } | null,
};

export type ListTitlesQueryVariables = {
  filter?: ModelTitleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTitlesQuery = {
  listTitles?:  {
    __typename: "ModelTitleConnection",
    items:  Array< {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist?:  {
    __typename: "Artist",
    id: string,
    artistName: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    song?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists?:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    image?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    genre?: string | null,
    duration?: number | null,
    title?:  {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongId?: string | null,
    albumSongsId?: string | null,
    playlistSongsId?: string | null,
    songTitleId?: string | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    playlist?:  {
      __typename: "ModelPlaylistConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaylistQueryVariables = {
  id: string,
};

export type GetPlaylistQuery = {
  getPlaylist?:  {
    __typename: "Playlist",
    id: string,
    playlistName: string,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    playlistOwner?:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlaylistId?: string | null,
  } | null,
};

export type ListPlaylistsQueryVariables = {
  filter?: ModelPlaylistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlaylistsQuery = {
  listPlaylists?:  {
    __typename: "ModelPlaylistConnection",
    items:  Array< {
      __typename: "Playlist",
      id: string,
      playlistName: string,
      createdAt: string,
      updatedAt: string,
      userPlaylistId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTitleSubscriptionVariables = {
  filter?: ModelSubscriptionTitleFilterInput | null,
};

export type OnCreateTitleSubscription = {
  onCreateTitle?:  {
    __typename: "Title",
    id: string,
    name: string,
    song?:  {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    titleSongId?: string | null,
    titleAlbumId?: string | null,
  } | null,
};

export type OnUpdateTitleSubscriptionVariables = {
  filter?: ModelSubscriptionTitleFilterInput | null,
};

export type OnUpdateTitleSubscription = {
  onUpdateTitle?:  {
    __typename: "Title",
    id: string,
    name: string,
    song?:  {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    titleSongId?: string | null,
    titleAlbumId?: string | null,
  } | null,
};

export type OnDeleteTitleSubscriptionVariables = {
  filter?: ModelSubscriptionTitleFilterInput | null,
};

export type OnDeleteTitleSubscription = {
  onDeleteTitle?:  {
    __typename: "Title",
    id: string,
    name: string,
    song?:  {
      __typename: "Song",
      id: string,
      genre?: string | null,
      duration?: number | null,
      createdAt: string,
      updatedAt: string,
      artistSongId?: string | null,
      albumSongsId?: string | null,
      playlistSongsId?: string | null,
      songTitleId?: string | null,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    titleSongId?: string | null,
    titleAlbumId?: string | null,
  } | null,
};

export type OnCreateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist?:  {
    __typename: "Artist",
    id: string,
    artistName: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    song?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist?:  {
    __typename: "Artist",
    id: string,
    artistName: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    song?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist?:  {
    __typename: "Artist",
    id: string,
    artistName: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    song?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    image?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
  } | null,
};

export type OnUpdateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    image?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
  } | null,
};

export type OnDeleteAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    image?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistAlbumsId?: string | null,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    genre?: string | null,
    duration?: number | null,
    title?:  {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongId?: string | null,
    albumSongsId?: string | null,
    playlistSongsId?: string | null,
    songTitleId?: string | null,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    genre?: string | null,
    duration?: number | null,
    title?:  {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongId?: string | null,
    albumSongsId?: string | null,
    playlistSongsId?: string | null,
    songTitleId?: string | null,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    genre?: string | null,
    duration?: number | null,
    title?:  {
      __typename: "Title",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      titleSongId?: string | null,
      titleAlbumId?: string | null,
    } | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      artistName: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    album?:  {
      __typename: "Album",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      artistAlbumsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    artistSongId?: string | null,
    albumSongsId?: string | null,
    playlistSongsId?: string | null,
    songTitleId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    playlist?:  {
      __typename: "ModelPlaylistConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    playlist?:  {
      __typename: "ModelPlaylistConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userID: string,
    username: string,
    playlist?:  {
      __typename: "ModelPlaylistConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaylistSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistFilterInput | null,
};

export type OnCreatePlaylistSubscription = {
  onCreatePlaylist?:  {
    __typename: "Playlist",
    id: string,
    playlistName: string,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    playlistOwner?:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlaylistId?: string | null,
  } | null,
};

export type OnUpdatePlaylistSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistFilterInput | null,
};

export type OnUpdatePlaylistSubscription = {
  onUpdatePlaylist?:  {
    __typename: "Playlist",
    id: string,
    playlistName: string,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    playlistOwner?:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlaylistId?: string | null,
  } | null,
};

export type OnDeletePlaylistSubscriptionVariables = {
  filter?: ModelSubscriptionPlaylistFilterInput | null,
};

export type OnDeletePlaylistSubscription = {
  onDeletePlaylist?:  {
    __typename: "Playlist",
    id: string,
    playlistName: string,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    playlistOwner?:  {
      __typename: "User",
      id: string,
      userID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlaylistId?: string | null,
  } | null,
};
