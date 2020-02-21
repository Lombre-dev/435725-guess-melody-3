import PropTypes from 'prop-types';
import React from 'react';
import AudioPlayer from '../audio-player/audio-player';
import {Track} from '../types';

export default class GenreQuestionAnswer extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {

    const {index, onSelectCallback} = this.props;

    onSelectCallback({index, checked: e.target.checked});
  }

  render() {

    const {index, track, checked} = this.props;

    return (
      <div className="track">
        <AudioPlayer
          id={index}
          isPlaying={false}
          isDisabled={false}
          onCanPlayThrough={() => {}}
          onPlay={() => {}}
          onPause={() => {}}
          onEnd={() => {}}
          src={track.src}
        />
        <div className="game__answer">
          <input
            className="game__input visually-hidden"
            type="checkbox"
            name="answer"
            value={`answer-${index}`}
            id={`answer-${index}`}
            checked={checked}
            onChange={this._handleChange}
          />
          <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
        </div>
      </div>
    );
  }
}

GenreQuestionAnswer.propTypes = {
  index: PropTypes.number.isRequired,
  track: Track.isRequired,
  checked: PropTypes.bool,
  onSelectCallback: PropTypes.func.isRequired,
};
