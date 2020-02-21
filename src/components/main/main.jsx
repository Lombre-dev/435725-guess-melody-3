import PropTypes from 'prop-types';
import React from 'react';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import {ARTIST_QUESITON_TYPE, GENRE_QUESTION_TYPE} from '../consts';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import {Questions} from '../types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

export default class Main extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this._handleStart = this._handleStart.bind(this);
    this._handleQuestionAnswer = this._handleQuestionAnswer.bind(this);
  }

  _handleStart() {
    this.setState(() => {
      return {
        step: 0,
      };
    });
  }

  _handleQuestionAnswer({_question, _answers}) {
    if (this._isLastQuestion()) {
      this._handleEnd();
    } else {
      this._nextQuestion();
    }
  }

  _isLastQuestion() {

    const {step} = this.state;
    const {questions} = this.props;

    return step === questions.length - 1;
  }

  _nextQuestion() {
    this.setState((prevState) => {
      return {
        step: prevState.step + 1,
      };
    });
  }

  _handleEnd() {
    this.setState(() => {
      return {
        step: -1,
      };
    });
  }

  render() {

    const {errorsLimit, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (question) {
      switch (question.type) {
        case ARTIST_QUESITON_TYPE:
          return (
            <ArtistQuestionScreen
              question={question}
              onAnswerCallback={this._handleQuestionAnswer}
            />
          );
        case GENRE_QUESTION_TYPE:
          return (
            <GenreQuestionScreen
              question={question}
              onAnswerCallback={this._handleQuestionAnswer}
            />
          );
      }
    }

    return (
      <WelcomeScreen
        errorsLimit={errorsLimit}
        onWelcomeButtonClick={this._handleStart}
      />
    );
  }
}

Main.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
  questions: Questions.isRequired,
};
