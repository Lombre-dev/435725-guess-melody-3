import PropTypes from 'prop-types';
import React from 'react';
import {Track} from '../types';

export default class GenreQuestionScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      checks: this.props.trackList.map(() => false),
    };

    this._handleCheckboxClick = this._updateChecks.bind(this);
  }

  _updateChecks(index, checked) {
    this.setState((prevState) => {

      const checks = prevState.checks.slice();

      checks[index] = checked;

      return {
        checks,
      };
    });
  }

  render() {

    const {checks} = this.state;
    const {trackList, onAnswerCallback} = this.props;

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
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form className="game__tracks" onSubmit={
            (e) => {
              e.preventDefault();
              onAnswerCallback({answer: this.state.checks});
            }
          }>
            {
              trackList.map((value, index) => {

                const counter = index + 1;

                return (
                  <div className="track" key={value.title}>
                    <button className="track__button track__button--play" type="button"></button>
                    <div className="track__status">
                      <audio src={value.src}></audio>
                    </div>
                    <div className="game__answer">
                      <input
                        className="game__input visually-hidden"
                        type="checkbox"
                        name="answer"
                        value={`answer-${counter}`}
                        id={`answer-${counter}`}
                        checked={checks[index]}
                        onChange={
                          (e) => {
                            this._updateChecks(index, e.target.checked);
                          }
                        }
                      />
                      <label className="game__check" htmlFor={`answer-${counter}`}>Отметить</label>
                    </div>
                  </div>
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
  trackList: PropTypes.arrayOf(Track).isRequired,
  onAnswerCallback: PropTypes.func.isRequired,
};
