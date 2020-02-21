import PropTypes from 'prop-types';
import React from 'react';
import ArtistQuestionAnswer from '../artist-question-answer/artist-question-answer';
import AudioPlayer from '../audio-player/audio-player';
import {Artist, Track} from '../types';

export default class ArtistQuestionScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleAnswerSelect = this._handleAnswerSelect.bind(this);
  }

  _handleAnswerSelect({index}) {

    const {question, onAnswerCallback} = this.props;

    onAnswerCallback({question, answer: index});
  }

  render() {

    const {question} = this.props;
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
                isPlaying={true}
                isDisabled={false}
                onCanPlayThrough={() => {}}
                onPlay={() => {}}
                onPause={() => {}}
                onEnd={() => {}}
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
                    onSelectCallback={this._handleAnswerSelect}
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
  onAnswerCallback: PropTypes.func.isRequired,
};
