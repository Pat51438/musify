import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Title, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly song?: Song | null;
  readonly album?: Album | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly titleSongId?: string | null;
  readonly titleAlbumId?: string | null;
}

type LazyTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Title, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly song: AsyncItem<Song | undefined>;
  readonly album: AsyncItem<Album | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly titleSongId?: string | null;
  readonly titleAlbumId?: string | null;
}

export declare type Title = LazyLoading extends LazyLoadingDisabled ? EagerTitle : LazyTitle

export declare const Title: (new (init: ModelInit<Title>) => Title) & {
  copyOf(source: Title, mutator: (draft: MutableModel<Title>) => MutableModel<Title> | void): Title;
}

type EagerArtist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Artist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly artistName: string;
  readonly albums?: (Album | null)[] | null;
  readonly song?: (Song | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArtist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Artist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly artistName: string;
  readonly albums: AsyncCollection<Album>;
  readonly song: AsyncCollection<Song>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Artist = LazyLoading extends LazyLoadingDisabled ? EagerArtist : LazyArtist

export declare const Artist: (new (init: ModelInit<Artist>) => Artist) & {
  copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

type EagerAlbum = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Album, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly artist?: Artist | null;
  readonly songs?: (Song | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistAlbumsId?: string | null;
}

type LazyAlbum = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Album, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly songs: AsyncCollection<Song>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistAlbumsId?: string | null;
}

export declare type Album = LazyLoading extends LazyLoadingDisabled ? EagerAlbum : LazyAlbum

export declare const Album: (new (init: ModelInit<Album>) => Album) & {
  copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

type EagerSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly genre?: string | null;
  readonly duration?: number | null;
  readonly title?: Title | null;
  readonly artist?: Artist | null;
  readonly album?: Album | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistSongId?: string | null;
  readonly albumSongsId?: string | null;
  readonly songTitleId?: string | null;
  readonly playlistSongsId?: string | null;
}

type LazySong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly genre?: string | null;
  readonly duration?: number | null;
  readonly title: AsyncItem<Title | undefined>;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly album: AsyncItem<Album | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistSongId?: string | null;
  readonly albumSongsId?: string | null;
  readonly songTitleId?: string | null;
  readonly playlistSongsId?: string | null;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly username: string;
  readonly playlist?: (Playlist | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly username: string;
  readonly playlist: AsyncCollection<Playlist>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPlaylist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Playlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playlistName: string;
  readonly songs?: (Song | null)[] | null;
  readonly playlistOwner?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPlaylistId?: string | null;
}

type LazyPlaylist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Playlist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playlistName: string;
  readonly songs: AsyncCollection<Song>;
  readonly playlistOwner: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPlaylistId?: string | null;
}

export declare type Playlist = LazyLoading extends LazyLoadingDisabled ? EagerPlaylist : LazyPlaylist

export declare const Playlist: (new (init: ModelInit<Playlist>) => Playlist) & {
  copyOf(source: Playlist, mutator: (draft: MutableModel<Playlist>) => MutableModel<Playlist> | void): Playlist;
}