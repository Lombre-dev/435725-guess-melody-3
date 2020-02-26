import React from 'react';
import renderer from 'react-test-renderer';
import {ErrorIndicator} from './error-indicator';

const ERRORS_COUNT = 0;
const ERRORS_LIMIT = 3;

describe(`<ErrorsIndicator />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<ErrorIndicator
        count={ERRORS_COUNT}
        limit={ERRORS_LIMIT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
