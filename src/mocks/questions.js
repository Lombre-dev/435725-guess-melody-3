import {ARTIST_QUESITON_TYPE, GENRE_QUESTION_TYPE} from '../components/consts';
import {ARTISTS, TRACKS} from './data';

const artists = Object.values(ARTISTS);
const tracks = Object.values(TRACKS);

export const QUESTIONS = [
  {
    type: ARTIST_QUESITON_TYPE,
    track: tracks[Math.floor(Math.random() * tracks.length)],
    answers: artists,
  },
  {
    type: GENRE_QUESTION_TYPE,
    genre: `rock`,
    answers: tracks,
  },
  {
    type: ARTIST_QUESITON_TYPE,
    track: tracks[Math.floor(Math.random() * tracks.length)],
    answers: artists,
  },
];

export const HANDLE_QUESTION_ANSWER = (result) => {
  // eslint-disable-next-line no-console
  console.log(result);
};
