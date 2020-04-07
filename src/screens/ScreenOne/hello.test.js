import React from 'react';
import {render} from 'react-native-testing-library';
import Hello from './ScreenOne/hello.js';

describe('Hello', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Hello />);
    expect(queryByText('Hello, world!')).not.toBeNull();
  });
});
