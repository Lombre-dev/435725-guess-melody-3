const DICTIONARY = {
  makeErrors: [`ошибку`, `ошибки`, `ошибок`],
};

export function getPluralFormOfMakeErrors(count) {
  return getPluralForm(count, DICTIONARY.makeErrors);
}

export function getPluralForm(count, numerals) {

  let remainder = count % 100;

  if (remainder > 10 && remainder < 15) {
    return numerals[2];
  } else {
    remainder %= 10;
    if (remainder > 1 && remainder < 5) {
      return numerals[1];
    } else if (remainder === 1) {
      return numerals[0];
    }
  }
  return numerals[2];
}
