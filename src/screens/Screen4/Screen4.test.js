import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Screen4} from './Screen4.js';

describe('Screen 2', () => {
  it('can render with the given data', () => {
    const props = {
      movies: [
        {id: '1', title: 'Star Wars', releaseYear: '1977'},
        {id: '2', title: 'Back to the Future', releaseYear: '1985'},
        {id: '3', title: 'The Matrix', releaseYear: '1999'},
        {id: '4', title: 'Inception', releaseYear: '2010'},
        {id: '5', title: 'Interstellar', releaseYear: '2014'},
      ],
    };
    const renderer = new ShallowRenderer();
    renderer.render(<Screen4 {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('does not crash with no data', () => {
    const props = {
      movies: [],
    };

    const renderer = new ShallowRenderer();
    renderer.render(<Screen4 {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
