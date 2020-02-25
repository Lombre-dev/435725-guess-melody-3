import PropTypes from 'prop-types';
import React from 'react';

export default function withCanPlayThrough(Component) {

  class WithCanPlayThrough extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        isDisabled: true,
      };

      this._handleCanPlayThrough = this._handleCanPlayThrough.bind(this);
    }

    _handleCanPlayThrough() {

      const {id, isAutoplay, onPlay} = this.props;

      if (isAutoplay) {
        onPlay({id});
      }

      this.setState({
        isDisabled: false,
      });
    }

    render() {

      const {isDisabled} = this.state;

      return (
        <Component {...this.props}
          isDisabled={isDisabled}
          onCanPlayThrough={this._handleCanPlayThrough}
        />
      );
    }

  }

  WithCanPlayThrough.propTypes = {
    id: PropTypes.number.isRequired,
    isAutoplay: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onEnd: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
  };

  WithCanPlayThrough.defaultProps = {
    isAutoplay: false,
    volume: 1,
  };

  return WithCanPlayThrough;
}
