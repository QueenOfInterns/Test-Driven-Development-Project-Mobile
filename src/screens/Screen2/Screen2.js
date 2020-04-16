/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

export class Screen2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {name: 'Spongebob', id: '1'},
        {name: 'Patrick', id: '2'},
        {name: 'Sandy', id: '3'},
        {name: 'Squidward', id: '4'},
        {name: 'Mr. Krabs', id: '5'},
        {name: 'Gary', id: '6'},
      ],
    };
  }

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.users}
          renderItem={({item}) => (
            <View>
              <Text
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
