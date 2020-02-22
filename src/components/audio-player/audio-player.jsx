import PropTypes from 'prop-types';
import React from 'react';

export default class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this._handleAudioPlay = this._handleAudioPlay.bind(this);
    this._handleAudioPause = this._handleAudioPause.bind(this);
    this._handleAudioEnd = this._handleAudioEnd.bind(this);
    this._handleAudioTimeUpdate = this._handleAudioTimeUpdate.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {

    const {src, volume, onCanPlayThrough, onPause, onEnd} = this.props;
    const audio = this._audioRef.current;

    audio.oncanplaythrough = onCanPlayThrough;
    audio.onplay = this._handleAudioPlay;
    audio.onpause = onPause;
    audio.onend = onEnd;
    audio.ontimeupdate = this._handleAudioTimeUpdate;
    audio.volume = volume;
    audio.src = src;
  }

  componentWillUnmount() {

    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.onend = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  componentDidUpdate() {

    const {isPlaying} = this.props;
    const audio = this._audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  _handleAudioPlay() {

    const {id, onPlay} = this.props;

    onPlay({id});
  }

  _handleAudioTimeUpdate() {

    const audio = this._audioRef.current;

    const {id, onTimeUpdate} = this.props;

    onTimeUpdate({id, progress: audio.currentTime});
  }

  _handleClick() {

    const {id, onPlayButtonClick} = this.props;

    onPlayButtonClick({id});
  }

  render() {

    const {isDisabled, isPlaying} = this.props;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isDisabled}
          onClick={this._handleClick}
        />
        <div className="track__status">
          <audio ref={this._audioRef} />
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onCanPlayThrough: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func,
  onPause: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  volume: PropTypes.number,
  // вернул, все же, коллбек по нажатию
  onPlayButtonClick: PropTypes.func.isRequired,
};

AudioPlayer.defaultProps = {
  volume: 1,
};
