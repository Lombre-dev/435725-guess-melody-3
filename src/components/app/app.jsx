import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {HANDLE_QUESTION_ANSWER} from '../../mocks/questions';
import ArtistQuestionScreen from '../artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen';
import Main from '../main/main';
import {Questions} from '../types';

class App extends React.PureComponent {

  render() {

    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Route exact path='/'>
          <Main />
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
  questions: Questions.isRequired,
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
  };
}

export {App};
export default connect(mapStateToProps)(App);
