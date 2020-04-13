/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ScreenOne from './ScreenOne.js';

describe('Hello World Screen', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ScreenOne />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});