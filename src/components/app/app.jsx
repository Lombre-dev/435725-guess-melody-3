import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import {ARTIST_QUESITON_TYPE, GENRE_QUESTION_TYPE} from '../consts';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import {QuestionList} from '../types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

export default class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this._handleWelcomeButtonClick = this._handleWelcomeButtonClick.bind(this);
    this._handleAnswer = this._handleAnswer.bind(this);
  }

  _handleWelcomeButtonClick() {
    this._handleAnswer({});
  }

  _handleAnswer({_answer}) {

    // console.log(answer);

    this.setState((prevState) => {

      const {questionList} = this.props;

      return {
        step: prevState.step < questionList.length - 1 ? prevState.step + 1 : -1,
      };
    });
  }

  _renderStep() {

    const {step} = this.state;
    const {errorsLimit, questionList} = this.props;

    if (step >= 0 && this.state.step < questionList.length) {

      const question = questionList[step];

      switch (question.type) {
        case ARTIST_QUESITON_TYPE:
          return (
            <ArtistQuestionScreen
              track={question.track}
              artistList={question.artistList}
              onAnswerCallback={this._handleAnswer}
            />
          );
        case GENRE_QUESTION_TYPE:
          return (
            <GenreQuestionScreen
              trackList={question.trackList}
              onAnswerCallback={this._handleAnswer}
            />
          );
      }
    }

    return (
      <WelcomeScreen
        errorsLimit={errorsLimit}
        onWelcomeButtonClick={this._handleWelcomeButtonClick}
      />
    );
  }

  render() {

    const {questionList} = this.props;

    return (
      <BrowserRouter>
        <Route exact path='/'>
          {
            this._renderStep()
          }
        </Route>
        <Route exact path='/dev-artist'>
          <ArtistQuestionScreen
            track={questionList[0].track}
            artistList={questionList[0].artistList}
            onAnswerCallback={this._handleAnswer}
          />
        </Route>
        <Route exact path='/dev-genre'>
          <GenreQuestionScreen
            trackList={questionList[1].trackList}
            onAnswerCallback={this._handleAnswer}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
  questionList: QuestionList.isRequired,
};
