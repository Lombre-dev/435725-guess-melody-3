import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import GenreQuestionAnswer from '../genre-question-answer/genre-question-answer';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({
  adapter: new Adapter(),
});

const GENRE = `rock`;
const TRACKS = [
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
    genre: `classic`,
    src: ``,
  },
  {
    artist: {
      name: `Artist 4`,
      image: ``,
    },
    title: `Track 4`,
    genre: `ska`,
    src: ``,
  },
];
const CURRENT_TRACK_ID = 0;
const HANDLE_CALLBACK = () => {};

describe(`<GenreQuestionScreen />`, () => {

  it(`answer callback should be called`, () => {

    const handleAnswer = jest.fn();
    const question = {
      genre: GENRE,
      answers: TRACKS,
    };

    jest.spyOn(HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

    const result = mount(<GenreQuestionScreen
      question={question}
      currentTrackId={CURRENT_TRACK_ID}
      onPlay={HANDLE_CALLBACK}
      onPause={HANDLE_CALLBACK}
      onEnd={HANDLE_CALLBACK}
      onAnswer={handleAnswer}
    />);

    result
      .find(`.game__tracks`)
      .simulate(`submit`, {
        preventDefault() {}
      });

    expect(handleAnswer).toHaveBeenCalledTimes(1);
  });

  it(`answer result should be equal sample`, () => {

    const handleAnswer = jest.fn();
    const question = {
      genre: GENRE,
      answers: TRACKS,
    };
    const sample = {
      question,
      answer: [false, true, false, true],
    };

    jest.spyOn(HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

    const result = mount(<GenreQuestionScreen
      question={question}
      currentTrackId={CURRENT_TRACK_ID}
      onPlay={HANDLE_CALLBACK}
      onPause={HANDLE_CALLBACK}
      onEnd={HANDLE_CALLBACK}
      onAnswer={handleAnswer}
    />);

    const elements = result.find(GenreQuestionAnswer);
    const simulateParams = {
      target: {
        checked: true,
      }
    };

    elements.at(1).find(`.game__input`).simulate(`change`, simulateParams);
    elements.at(3).find(`.game__input`).simulate(`change`, simulateParams);

    result.find(`.game__tracks`)
      .simulate(`submit`, {
        preventDefault() {}
      });

    expect(handleAnswer.mock.calls[0][0]).toMatchObject(sample);
  });
});
