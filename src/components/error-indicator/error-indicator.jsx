import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

function ErrorIndicator({count, limit}) {

  const iterator = new Array(limit).fill(``);

  return (
    <div className="game__mistakes">
      {
        iterator.map((_value, index) => {
          return (
            <div key={`error-${index}`} className="wrong" style={{opacity: index < count ? 0.25 : 1}} />
          );
        })
      }
    </div>
  );
}

ErrorIndicator.propTypes = {
  count: PropTypes.number.isRequired, // from store
  limit: PropTypes.number.isRequired, // from store
};

function mapStateToProps(state) {
  return {
    count: state.errorsCount,
    limit: state.errorsLimit,
  };
}

export {ErrorIndicator};
export default connect(mapStateToProps)(ErrorIndicator);
