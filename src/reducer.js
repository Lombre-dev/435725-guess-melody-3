import {ARTIST_QUESITON_TYPE, GENRE_QUESTION_TYPE} from './consts';
import {ERRORS_LIMIT} from './mocks/data';
import {QUESTIONS} from './mocks/questions';

const initialState = {
  errorsCount: 0,
  errorsLimit: ERRORS_LIMIT,
  step: -1,
  questions: QUESTIONS,
};

export const ActionType = {
  INCREMENT_ERROR: `INCREMENT_ERROR`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

function checkArtistQuesionAnswer({question, answer}) {

  const {track: {artist: questionArtist}, answers} = question;
  const answerArtis = answers[answer];

  return questionArtist.name === answerArtis.name;
}

function checkGenreQuestionAnswer({question, answer}) {

  const {genre, answers: questionAnswer} = question;

  return answer.every((value, index) => value === (questionAnswer[index].genre === genre));
}

export const ActionCreator = {
  incrementError: ({question, answer}) => {

    let checkResult;

    switch (question.type) {
      case ARTIST_QUESITON_TYPE:
        checkResult = checkArtistQuesionAnswer({question, answer});
        break;
      case GENRE_QUESTION_TYPE:
        checkResult = checkGenreQuestionAnswer({question, answer});
        break;
    }

    return {
      type: ActionType.INCREMENT_ERROR,
      payload: checkResult ? 0 : 1,
    };
  },
  incrementStep: () => {
    return {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    };
  }
};

export function reducer(state = initialState, action) {

  switch (action.type) {
    case ActionType.INCREMENT_ERROR:

      const errorsCount = state.errorsCount + action.payload;

      if (errorsCount < state.errorsLimit) {
        return Object.assign({}, state, {errorsCount});
      }
      return Object.assign({}, initialState);

    case ActionType.INCREMENT_STEP:

      const step = state.step + action.payload;

      if (step < state.questions.length) {
        return Object.assign({}, state, {step});
      }
      return Object.assign({}, initialState);
  }

  return state;
}
