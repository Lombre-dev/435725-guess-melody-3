import PropTypes from 'prop-types';
import React from 'react';
import {GENRES} from '../../consts';
import ErrorIndicator from '../error-indicator/error-indicator';
import GenreQuestionAnswer from '../genre-question-answer/genre-question-answer';
import {Track} from '../types';

export default class GenreQuestionScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      checks: this.props.question.answers.map(() => false),
    };

    this._handleAnswerSelect = this._handleAnswerSelect.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleAnswerSelect({index, checked}) {

    this.setState((prevState) => {

      const checks = prevState.checks.slice();

      checks[index] = checked;

      return {
        checks,
      };
    });
  }

  _handleFormSubmit(e) {

    const {question, onAnswer} = this.props;
    const {checks} = this.state;

    e.preventDefault();
    onAnswer({question, answer: checks});
  }

  render() {

    const {checks} = this.state;
    const {question, currentTrackId, onPlay, onPause, onEnd} = this.props;
    const {genre, answers} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={
                {
                  filter: `url(#blur)`,
                  transform: `rotate(-90deg) scaleY(-1)`,
                  transformOrigin: `center`,
                }
              }
            />
          </svg>

          <ErrorIndicator />
        </header>

        <section className="game__screen">
          <h2 className="game__title">{`Выберите ${genre} треки`}</h2>
          <form className="game__tracks" onSubmit={this._handleFormSubmit}>
            {
              answers.map((value, index) => {
                return (
                  <GenreQuestionAnswer
                    key={value.title}
                    currentTrackId={currentTrackId}
                    onPlay={onPlay}
                    onPause={onPause}
                    onEnd={onEnd}
                    index={index}
                    checked={checks[index]}
                    track={value}
                    onSelect={this._handleAnswerSelect}
                  />
                );
              })
            }
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.oneOf(GENRES).isRequired,
    answers: PropTypes.arrayOf(Track).isRequired,
  }).isRequired,
  currentTrackId: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};
