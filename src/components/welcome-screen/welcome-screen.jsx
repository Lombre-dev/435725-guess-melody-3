import PropTypes from 'prop-types';
import React from 'react';
import {getPluralFormOfMakeErrors} from '../../utils/number-utls';

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
        <li>Можно допустить {`${errorsLimit} ${getPluralFormOfMakeErrors(errorsLimit)}`}.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  errorsLimit: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
};

export default WelcomeScreen;
