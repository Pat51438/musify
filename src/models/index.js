// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Title, Artist, Album, Song, User, Playlist } = initSchema(schema);

export {
  Title,
  Artist,
  Album,
  Song,
  User,
  Playlist
};