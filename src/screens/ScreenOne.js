/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Hello from './ScreenOne/hello.js';

export class ScreenOne extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen One</Text>
        <Text> Write the code for this test case: </Text>
        <Text>
          ' describe('Hello', () =>{' '}
          {it('renders the correct message', () => {
            const {queryByText} = render(<Hello />);
            expect(queryByText('Hello, world!')).not.toBeNull();
          })}
          ); '
        </Text>
      </View>
    );
  }
}
