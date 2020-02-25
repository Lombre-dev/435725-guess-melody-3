import PropTypes from 'prop-types';
import React from 'react';

export default class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {

    const {src, volume, onCanPlayThrough, onEnd} = this.props;
    const audio = this._audioRef.current;

    audio.oncanplaythrough = onCanPlayThrough;
    audio.onend = onEnd;
    audio.volume = volume;
    audio.src = src;
  }

  componentWillUnmount() {

    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onend = null;
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

  _handleClick() {

    const {id, isPlaying, onPause, onPlay} = this.props;

    if (isPlaying) {
      onPause();
    } else {
      onPlay({id});
    }
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
  onPause: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  volume: PropTypes.number,
};

AudioPlayer.defaultProps = {
  volume: 1,
};
