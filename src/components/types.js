import PropTypes from 'prop-types';
import {GENRES, QUESTION_TYPES} from './consts';

export const Artist = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
});

export const Track = PropTypes.shape({
  artist: Artist.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.oneOf(GENRES).isRequired,
  src: PropTypes.string.isRequired,
});

export const ArtistQuestion = PropTypes.shape({
  type: PropTypes.oneOf(QUESTION_TYPES).isRequired,
  track: Track.isRequired,
  answers: PropTypes.arrayOf(Artist).isRequired,
});

export const GenreQuestion = PropTypes.shape({
  type: PropTypes.oneOf(QUESTION_TYPES).isRequired,
  genre: PropTypes.oneOf(GENRES).isRequired,
  answers: PropTypes.arrayOf(Track).isRequired,
});

export const Questions = PropTypes.arrayOf(PropTypes.oneOfType([ArtistQuestion, GenreQuestion]));
