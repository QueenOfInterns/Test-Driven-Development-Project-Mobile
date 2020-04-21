import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Screen1 from './Screen1.js';

describe('Hello World Screen', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Screen1 />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
