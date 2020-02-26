import {ActionCreator, ActionType, reducer} from './reducer';

const ERRORS_LIMIT = 3;
const ARTISTS = {
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

const TRACKS = {
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

const artists = Object.values(ARTISTS).sort();
const tracks = Object.values(TRACKS).sort();

const QUESTIONS = [
  {
    type: `artist`,
    track: tracks[1],
    answers: artists,
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: tracks,
  },
  {
    type: `artist`,
    track: tracks[2],
    answers: artists,
  },
];

describe(`Reducer`, () => {

  it(`should be equal initial state`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        errorsCount: 0,
        errorsLimit: ERRORS_LIMIT,
        step: -1,
        questions: QUESTIONS,
      });
  });

  it(`errors count should be increased`, () => {
    expect(reducer({
      step: 0,
      errorsCount: 0,
      errorsLimit: ERRORS_LIMIT,
      questions: QUESTIONS,
    }, {
      type: ActionType.INCREMENT_ERROR,
      payload: 1,
    }))
      .toEqual({
        step: 0,
        errorsCount: 1,
        errorsLimit: ERRORS_LIMIT,
        questions: QUESTIONS,
      });
  });

  it(`errors count should be exceeded errors limit`, () => {
    expect(reducer({
      step: 0,
      errorsCount: 2,
      errorsLimit: ERRORS_LIMIT,
      questions: QUESTIONS,
    }, {
      type: ActionType.INCREMENT_ERROR,
      payload: 1,
    }))
      .toEqual({
        step: -1,
        errorsCount: 0,
        errorsLimit: ERRORS_LIMIT,
        questions: QUESTIONS,
      });
  });

  it(`step should be increased`, () => {
    expect(reducer({
      step: 0,
      questions: QUESTIONS,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    }))
      .toEqual({
        step: 1,
        questions: QUESTIONS,
      });
  });

  it(`step should be exceeded questions count`, () => {
    expect(reducer({
      step: 2,
      errorsCount: 2,
      errorsLimit: ERRORS_LIMIT,
      questions: QUESTIONS,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    }))
      .toEqual({
        step: -1,
        errorsCount: 0,
        errorsLimit: ERRORS_LIMIT,
        questions: QUESTIONS,
      });
  });
});

describe(`ActionCreator`, () => {

  it(`answer for artist question must be correct`, () => {
    expect(ActionCreator.incrementError({question: QUESTIONS[0], answer: 1}))
      .toEqual({
        type: ActionType.INCREMENT_ERROR,
        payload: 0,
      });
  });

  it(`answer for artist question must be wrong`, () => {
    expect(ActionCreator.incrementError({question: QUESTIONS[0], answer: 0}))
      .toEqual({
        type: ActionType.INCREMENT_ERROR,
        payload: 1,
      });
  });

  it(`answer for genre question must be correct`, () => {
    expect(ActionCreator.incrementError({question: QUESTIONS[1], answer: [false, true, true, true]}))
      .toEqual({
        type: ActionType.INCREMENT_ERROR,
        payload: 0,
      });
  });

  it(`answer for genre question must be wrong`, () => {
    expect(ActionCreator.incrementError({question: QUESTIONS[1], answer: [true, false, true, false]}))
      .toEqual({
        type: ActionType.INCREMENT_ERROR,
        payload: 1,
      });
  });
});
