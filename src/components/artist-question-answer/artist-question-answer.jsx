import PropTypes from 'prop-types';
import React from 'react';
import {Artist} from '../types';

export default class ArtistQuestionAnswer extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange() {

    const {index, onSelect} = this.props;

    onSelect({index});
  }

  render() {

    const {index, artist} = this.props;

    return (
      <div className="artist">
        <input
          className="artist__input visually-hidden"
          type="radio"
          name="answer"
          value={`artist-${index}`}
          id={`answer-${index}`}
          onChange={this._handleChange}
        />
        <label className="artist__name" htmlFor={`answer-${index}`}>
          <img className="artist__picture" src={artist.image} alt={artist.name} />{artist.name}
        </label>
      </div>
    );
  }
}

ArtistQuestionAnswer.propTypes = {
  index: PropTypes.number.isRequired,
  artist: Artist.isRequired,
  onSelect: PropTypes.func.isRequired,
};
