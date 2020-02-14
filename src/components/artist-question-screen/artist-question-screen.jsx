import PropTypes from 'prop-types';
import React from 'react';
import {Artist, Track} from '../types';

export default class ArtistQuestionScreen extends React.PureComponent {

  render() {

    const {question, onAnswerCallback} = this.props;
    const {track, artistList} = question;

    return (
      <section className="game game--artist" >
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
                  transform: `rotate(-90deg) scaleY(- 1)`,
                  transformOrigin: `center`
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
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio src={track.src}></audio>
              </div>
            </div>
          </div>

          <form className="game__artist">
            {
              artistList.map((value, index) => {

                const counter = index + 1;

                return (
                  <div className="artist" key={value.name}>
                    <input
                      className="artist__input visually-hidden"
                      type="radio"
                      name="answer"
                      value={`artist-${counter}`}
                      id={`answer-${counter}`}
                      onChange={
                        () => {
                          onAnswerCallback({question, answer: index});
                        }
                      }
                    />
                    <label className="artist__name" htmlFor={`answer-${counter}`}>
                      <img className="artist__picture" src={value.image} alt={value.name} />{value.name}
                    </label>
                  </div>
                );
              })
            }
          </form>
        </section>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    track: Track.isRequired,
    artistList: PropTypes.arrayOf(Artist).isRequired,
  }).isRequired,
  onAnswerCallback: PropTypes.func.isRequired,
};
