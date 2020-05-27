import MyFlatlist from "./myFlatlist";
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

describe('MyFlatlist', () => {
    describe('Custom Flatlist', () => {
      it('can render with the given data', () => {
        const props = {
          users: [
            {title: 'Spongebob', body: '479-387-5534'},
            {title: 'Patrick', body: '479-256-5344'},
            {title: 'Sandy', body: '367-899-7070'},
            {title: 'Squidward', body: '367-345-9999'},
            {title: 'Mr. Krabs', body: '504-214-3322'},
            {title: 'Gary', body: '601-405-9977'},
          ],
        };
        const renderer = new ShallowRenderer();
        renderer.render(<MyFlatlist {...props} />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
      });
  
      it('does not crash with no data', () => {
        const props = {
          data: [],
        };
  
        const renderer = new ShallowRenderer();
        renderer.render(<MyFlatlist {...props} />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
      });
      it('displays error when there is an error', () => {
        const props = {
          error: true,
        };
        const renderer = new ShallowRenderer();
        renderer.render(<MyFlatlist {...props} />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
      });
    });
  });