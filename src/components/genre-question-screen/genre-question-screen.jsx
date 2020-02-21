import PropTypes from 'prop-types';
import React from 'react';
import {GENRES} from '../consts';
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

    const {question, onAnswerCallback} = this.props;
    const {checks} = this.state;

    e.preventDefault();
    onAnswerCallback({question, answer: checks});
  }

  render() {

    const {checks} = this.state;
    const {question, renderAudioPlayer} = this.props;
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

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">{`Выберите ${genre} треки`}</h2>
          <form className="game__tracks" onSubmit={this._handleFormSubmit}>
            {
              answers.map((value, index) => {
                return (
                  <GenreQuestionAnswer
                    key={value.title}
                    index={index}
                    checked={checks[index]}
                    track={value}
                    onSelectCallback={this._handleAnswerSelect}
                    renderAudioPlayer={renderAudioPlayer}
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
  onAnswerCallback: PropTypes.func.isRequired,
  renderAudioPlayer: PropTypes.func.isRequired,
};
