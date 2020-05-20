import MyFlatlist from "./myFlatlist";
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

describe('MyFlatlist', () => {
    describe('Custom Flatlist', () => {
      it('can render with the given data', () => {
        const props = {
          users: [
            {name: 'Spongebob', phoneNumber: '479-387-5534'},
            {name: 'Patrick', phoneNumber: '479-256-5344'},
            {name: 'Sandy', phoneNumber: '367-899-7070'},
            {name: 'Squidward', phoneNumber: '367-345-9999'},
            {name: 'Mr. Krabs', phoneNumber: '504-214-3322'},
            {name: 'Gary', phoneNumber: '601-405-9977'},
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