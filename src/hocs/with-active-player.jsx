import React from 'react';
import AudioPlayer from '../components/audio-player/audio-player';

export function withActivePlayer(Component, volume) {

  class WithActivePlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {

      const {activePlayerId} = this.state;

      return (
        <Component {...this.props}
          renderAudioPlayer={(src, id) => {
            return (
              <AudioPlayer
                src={src}
                isPlaying={id === activePlayerId}
                volume={volume}
                onPlayButtonClick={() => {
                  this.setState(() => {
                    return {
                      activePlayerId: activePlayerId === id ? -1 : id
                    };
                  });
                }}
              />
            );
          }}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
}
