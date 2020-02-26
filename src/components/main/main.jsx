import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {ARTIST_QUESITON_TYPE, GENRE_QUESTION_TYPE} from '../../consts';
import {ActionCreator} from '../../reducer';
import ArtistQuestionScreen from '../artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen';
import {Questions} from '../types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

class Main extends React.PureComponent {

  render() {

    const {
      questions,
      step,
      onWelcomeButtonClick,
      onQuestionAnswer
    } = this.props;
    const question = questions[step];

    if (question) {
      switch (question.type) {
        case ARTIST_QUESITON_TYPE:
          return (
            <ArtistQuestionScreen
              question={question}
              onAnswer={onQuestionAnswer}
            />
          );
        case GENRE_QUESTION_TYPE:
          return (
            <GenreQuestionScreen
              question={question}
              onAnswer={onQuestionAnswer}
            />
          );
      }
    }

    return (
      <WelcomeScreen onWelcomeButtonClick={onWelcomeButtonClick} />
    );
  }
}

Main.propTypes = {
  questions: Questions.isRequired,
  step: PropTypes.number.isRequired, // from store
  onWelcomeButtonClick: PropTypes.func.isRequired, // from store
  onQuestionAnswer: PropTypes.func.isRequired, // from store
};

function mapStateToProps(state) {
  return {
    step: state.step,
    questions: state.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onWelcomeButtonClick: () => {
      dispatch(ActionCreator.incrementStep());
    },
    onQuestionAnswer: ({question, answer}) => {
      dispatch(ActionCreator.incrementError({question, answer}));
      dispatch(ActionCreator.incrementStep());
    },
  };
}

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
