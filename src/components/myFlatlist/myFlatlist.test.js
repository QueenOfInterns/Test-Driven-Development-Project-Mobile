import MyFlatlist from "./myFlatlist";
describe('MyFlatlist', () => {
    describe('Custom Flatlist', () => {
      it('can render with the given data', () => {
        MyFlatlist.propTypes = {};
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