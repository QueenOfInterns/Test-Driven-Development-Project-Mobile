import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import Screen4Connected, {Screen4} from './Screen4.js';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore([]);

describe('Screen 4', () => {
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
    const shallow = new ShallowRenderer();
    shallow.render(<Screen4 {...props} />);
    expect(shallow.getRenderOutput()).toMatchSnapshot();
  });

  it('does not crash with no data', () => {
    const props = {
      movies: [],
    };

    const shallow = new ShallowRenderer();
    shallow.render(<Screen4 {...props} />);
    expect(shallow.getRenderOutput()).toMatchSnapshot();
  });
  describe('Connected', () => {
    let store;
    let component;

    beforeEach(() => {
      store = mockStore({
        myState: '',
      });

      store.dispatch = jest.fn();

      component = renderer.create(
        <Provider store={store}>
          <Screen4Connected />
        </Provider>,
      );
    });

    it('should render with global state', () => {
      expect(component.toJson).toMatchSnapshot();
    });

    // FIX
    it('should dispatch an action', () => {
      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
