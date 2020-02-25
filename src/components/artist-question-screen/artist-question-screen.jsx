import PropTypes from 'prop-types';
import React from 'react';
import ArtistQuestionAnswer from '../artist-question-answer/artist-question-answer';
import AudioPlayer from '../audio-player';
import {Artist, Track} from '../types';

export default class ArtistQuestionScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleAnswerSelect = this._handleAnswerSelect.bind(this);
  }

  _handleAnswerSelect({index}) {

    const {question, onAnswer} = this.props;

    onAnswer({question, answer: index});
  }

  render() {

    const {question, currentTrackId, onPlay, onPause, onEnd} = this.props;
    const {track, answers} = question;

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
              <AudioPlayer
                id={0}
                isAutoplay={true}
                isPlaying={currentTrackId === 0}
                onPlay={onPlay}
                onPause={onPause}
                onEnd={onEnd}
                src={track.src}
              />
            </div>
          </div>

          <form className="game__artist">
            {
              answers.map((value, index) => {
                return (
                  <ArtistQuestionAnswer
                    key={value.name}
                    index={index}
                    artist={value}
                    onSelect={this._handleAnswerSelect}
                  />
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
    answers: PropTypes.arrayOf(Artist).isRequired,
  }).isRequired,
  currentTrackId: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};
