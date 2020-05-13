/* eslint-disable no-undef */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Screen2} from './Screen2.js';

describe('Screen 2', () => {
  describe('Flatlist', () => {
    it('can render with the given data', () => {
      Screen2.propTypes = {};
      const renderer = new ShallowRenderer();
      renderer.render(<Screen2 {...props} />);
      expect(renderer.getRenderOutput()).toMatchSnapshot();
    });

    it('does not crash with no data', () => {
      const props = {
        data: [],
      };

      const renderer = new ShallowRenderer();
      renderer.render(<Screen2 {...props} />);
      expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
    it('displays error when there is an error', () => {
      const props = {
        error: true,
      };
      const renderer = new ShallowRenderer();
      renderer.render(<Screen2 {...props} />);
      expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
  });
});
