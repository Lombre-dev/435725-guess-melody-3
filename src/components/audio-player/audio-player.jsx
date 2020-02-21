import PropTypes from 'prop-types';
import React from 'react';

export default class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    const {isPlaying} = this.props;

    this._audioRef = React.createRef();
    this.state = {
      progress: 0,
      isCanPlay: false,
      isPlaying,
    };

    this._handleAudioCanPlayThrough = this._handleAudioCanPlayThrough.bind(this);
    this._handleAudioPlay = this._handleAudioPlay.bind(this);
    this._handleAudioPause = this._handleAudioPause.bind(this);
    this._handleAudioEnd = this._handleAudioEnd.bind(this);
    this._handleAudioTimeUpdate = this._handleAudioTimeUpdate.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {

    const {src, volume} = this.props;
    const audio = this._audioRef.current;

    audio.oncanplaythrough = this._handleAudioCanPlayThrough;
    audio.onplay = this._handleAudioPlay;
    audio.onpause = this._handleAudioPause;
    audio.onend = this._handleAudioEnd;
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

  _handleAudioCanPlayThrough() {
    this.setState(() => {
      return {
        isCanPlay: true,
      };
    });
  }

  _handleAudioPlay() {
    this.setState(() => {
      return {
        isPlaying: true,
      };
    });
  }

  _handleAudioPause() {
    this.setState(() => {
      return {
        isPlaying: false,
      };
    });
  }

  _handleAudioEnd() {
    this.setState(() => {
      return {
        isPlaying: false,
      };
    });
  }

  _handleAudioTimeUpdate() {

    const audio = this._audioRef.current;

    this.setState(() => {
      return {
        progress: audio.currentTime,
      };
    });
  }

  _handleClick() {

    const {onPlayButtonClick} = this.props;
    const {isPlaying} = this.state;

    this.setState(() => {
      return {
        isPlaying: !isPlaying,
      };
    });

    onPlayButtonClick();
  }

  render() {

    const {isCanPlay, isPlaying} = this.state;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={!isCanPlay}
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
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  volume: PropTypes.number,
};

AudioPlayer.defaultProps = {
  volume: 1,
};
