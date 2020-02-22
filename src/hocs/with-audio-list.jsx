import React from 'react';

function withAudioList(Component) {

  class WithAudioList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTrackId: -1,
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handlePause = this._handlePause.bind(this);
      this._handleEnd = this._handleEnd.bind(this);
    }

    _handlePlay({id}) {
      this.setState({
        currentTrackId: id,
      });
    }

    _handlePause() {
      this.setState({
        currentTrackId: -1,
      });
    }

    _handleEnd() {
      this.setState({
        currentTrackId: -1,
      });
    }

    render() {

      const {currentTrackId} = this.state;

      return (
        <Component {...this.props}
          currentTrackId={currentTrackId}
          onPlay={this._handlePlay}
          onPause={this._handlePause}
          onEnd={this._handleEnd}
        />
      );
    }
  }

  WithAudioList.propTypes = {};

  return WithAudioList;
}

export default withAudioList;
