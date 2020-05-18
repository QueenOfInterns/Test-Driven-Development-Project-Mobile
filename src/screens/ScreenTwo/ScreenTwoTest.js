/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ScreenTwo from '../ScreenTwo';

describe('Tab 2', () => {
  it('Displays list of data', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ScreenTwo />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
  it('Returns nothing when no data is passed to it', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ScreenTwo />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
