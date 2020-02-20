import PropTypes from 'prop-types';
import React from 'react';

export default class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    const {isPlaying} = this.props;

    this._ref = React.createRef();
    this.state = {
      time: 0,
      isLoaded: false,
      isPlaying,
    };

    this._handleAudioCanPlayThrough = this._handleAudioCanPlayThrough.bind(this);
    this._handleAudioPlay = this._handleAudioPlay.bind(this);
    this._handleAudioPause = this._handleAudioPause.bind(this);
    this._handleAudioTimeUpdate = this._handleAudioTimeUpdate.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {

    const {src} = this.props;
    const audio = this._ref.current;

    audio.oncanplaythrough = this._handleAudioTimeUpdate;
    audio.onplay = this._handleAudioPlay;
    audio.onpause = this._handleAudioPause;
    audio.ontimeupdate = this._handleAudioTimeUpdate;
    audio.src = src;
  }

  componentWillUnmount() {

    const audio = this._ref.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  componentDidUpdate() {

    const {isPlaying} = this.props;
    const audio = this._ref.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  _handleAudioCanPlayThrough() {
    this.setState(() => {
      return {
        isLoaded: true,
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

  _handleAudioTimeUpdate() {

    const audio = this._ref.current;

    this.setState(() => {
      return {
        time: audio.currentTime,
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

    const {isLoaded, isPlaying} = this.state;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={!isLoaded}
          onClick={this._handleClick}
        />
        <div className="track__status">
          <audio ref={this._ref} />
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};
