import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {HANDLE_QUESTION_ANSWER} from '../../mocks/questions';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import Main from '../main/main';
import {Questions} from '../types';

export default class App extends React.PureComponent {

  render() {

    const {errorsLimit, questions} = this.props;

    return (
      <BrowserRouter>
        <Route exact path='/'>
          <Main
            errorsLimit={errorsLimit}
            questions={questions}
          />
        </Route>
        <Route exact path='/dev-artist'>
          <ArtistQuestionScreen
            question={questions[0]}
            onAnswer={HANDLE_QUESTION_ANSWER}
          />
        </Route>
        <Route exact path='/dev-genre'>
          <GenreQuestionScreen
            question={questions[1]}
            onAnswer={HANDLE_QUESTION_ANSWER}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
  questions: Questions.isRequired,
};
