import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getPluralForm} from '../../utils/get-plural-form';

const WelcomeScreen = ({errorsLimit, onWelcomeButtonClick}) => {
  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <button className="welcome__button" onClick={onWelcomeButtonClick}>
        <span className="visually-hidden">Начать игру</span>
      </button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить {
          `${errorsLimit} ${getPluralForm(errorsLimit, [`ошибку`, `ошибки`, `ошибок`])}`
        }.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  errorsLimit: PropTypes.number.isRequired, // from store
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    errorsLimit: state.errorsLimit,
  };
}

export {WelcomeScreen};
export default connect(mapStateToProps)(WelcomeScreen);
