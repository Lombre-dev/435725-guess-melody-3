import {ARTIST_QUESITON_TYPE, GENRE_QUESTION_TYPE} from '../consts';
import {ARTISTS, TRACKS} from './data';

const artists = Object.values(ARTISTS).sort();
const tracks = Object.values(TRACKS).sort();

export const QUESTIONS = [
  {
    type: ARTIST_QUESITON_TYPE,
    track: tracks[1],
    answers: artists,
  },
  {
    type: GENRE_QUESTION_TYPE,
    genre: `rock`,
    answers: tracks,
  },
  {
    type: ARTIST_QUESITON_TYPE,
    track: tracks[2],
    answers: artists,
  },
];

export const HANDLE_QUESTION_ANSWER = (result) => {
  // eslint-disable-next-line no-console
  console.log(result);
};
