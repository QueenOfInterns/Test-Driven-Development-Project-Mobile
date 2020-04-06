import React from 'react';
import ScreenOne from './ScreenOne.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ScreenOne />).toJSON();
  expect(tree).toMatchSnapshot();
});
