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

  WithCanPlayThrough.propTypes = {};

  return WithCanPlayThrough;
}
