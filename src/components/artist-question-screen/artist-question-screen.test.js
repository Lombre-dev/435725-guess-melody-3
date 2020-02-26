import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ArtistQuestionScreen from './artist-question-screen';

const ERRORS_LIMIT = 3;
const QUESTIONS = [
  {
    type: `artist`,
    track: {
      artist: {
        name: `Artist 1`,
        image: ``,
      },
      title: `Title 1`,
      genre: `pop`,
      src: ``
    },
    answers: [
      {
        name: `Artist 1`,
        image: ``,
      },
      {
        name: `Artist 2`,
        image: ``,
      },
      {
        name: `Artist 3`,
        image: ``,
      },
      {
        name: `Artist 4`,
        image: ``,
      },
    ],
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        artist: {
          name: `Artist 1`,
          image: ``,
        },
        title: `Title 1`,
        genre: `pop`,
        src: ``
      },
      {
        artist: {
          name: `Artist 2`,
          image: ``,
        },
        title: `Track 2`,
        genre: `rock`,
        src: ``,
      },
      {
        artist: {
          name: `Artist 3`,
          image: ``,
        },
        title: `Track 3`,
        genre: `rock`,
        src: ``,
      },
      {
        artist: {
          name: `Artist 4`,
          image: ``,
        },
        title: `Track 4`,
        genre: `rock`,
        src: ``,
      },
    ],
  },
];
const TRACK = {
  artist: {
    name: `Artist 1`,
    image: ``,
  },
  title: `Title 1`,
  genre: `pop`,
  src: ``
};
const ARTISTS = [
  {
    name: `Artist 1`,
    image: ``,
  },
  {
    name: `Artist 2`,
    image: ``,
  },
  {
    name: `Artist 3`,
    image: ``,
  },
  {
    name: `Artist 4`,
    image: ``,
  },
];
const QUESTION = {
  track: TRACK,
  answers: ARTISTS,
};
const CURRENT_TRACK_ID = 0;
const HANDLE_CALLBACK = () => {};

const mockStore = configureStore([]);

describe(`<ArtistQuestionScreen />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      errorsCount: 0,
      errorsLimit: ERRORS_LIMIT,
      step: -1,
      questions: QUESTIONS,
    });

    const result = renderer
      .create(<Provider store={store}>
        <ArtistQuestionScreen
          question={QUESTION}
          currentTrackId={CURRENT_TRACK_ID}
          onPlay={HANDLE_CALLBACK}
          onPause={HANDLE_CALLBACK}
          onEnd={HANDLE_CALLBACK}
          onAnswer={HANDLE_CALLBACK}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
