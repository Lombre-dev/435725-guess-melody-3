export const ERRORS_LIMIT = 3;
export const TRACK_VOLUME = 0.25;

export const ARTISTS = {
  sting: {
    name: `Sting`,
    image: ``
  },
  redHotChiliPappers: {
    name: `Red Hot Chili Pappers`,
    image: ``,
  },
  deepPurple: {
    name: `Deep Purple`,
    image: ``,
  },
  slade: {
    name: `Slade`,
    image: ``,
  },
};

export const TRACKS = {
  englishmanInNewYork: {
    artist: ARTISTS.sting,
    title: `Englishman in New York`,
    genre: `pop`,
    src: `./samples/sting_sample.ogg`,
  },
  daniCalifornia: {
    artist: ARTISTS.redHotChiliPappers,
    title: `Dani California`,
    genre: `rock`,
    src: `./samples/rhcp_sample.ogg`,
  },
  sailAway: {
    artist: ARTISTS.deepPurple,
    title: `Sail Away`,
    genre: `rock`,
    src: `./samples/deep_purple_sample.ogg`,
  },
  oohLaLaInLA: {
    artist: ARTISTS.slade,
    title: `Ooh La La In LA`,
    genre: `rock`,
    src: `./samples/slade_sample.ogg`,
  },
};
