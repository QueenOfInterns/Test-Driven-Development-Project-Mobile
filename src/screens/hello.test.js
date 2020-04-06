import React from 'react';
import renderer from 'react-test-renderer';
import ScreenOne from './ScreenOne.js';

test('renders correctly', () => {
  const tree = renderer.create(<ScreenOne />).toJSON();
  expect(tree).toMatchSnapshot();
});
