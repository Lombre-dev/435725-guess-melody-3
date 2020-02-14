import {ARTIST_QUESITON_TYPE, GENRE_QUESTION_TYPE} from '../components/consts';
import {ARTISTS, TRACKS} from './data';

const artistList = Object.values(ARTISTS);
const trackList = Object.values(TRACKS);

export const QUESTION_LIST = [
  {
    type: ARTIST_QUESITON_TYPE,
    track: trackList[Math.floor(Math.random() * trackList.length)],
    artistList,
  },
  {
    type: GENRE_QUESTION_TYPE,
    genre: `rock`,
    trackList,
  },
  {
    type: ARTIST_QUESITON_TYPE,
    track: trackList[Math.floor(Math.random() * trackList.length)],
    artistList,
  },
];
