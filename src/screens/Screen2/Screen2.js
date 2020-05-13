/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

export class Screen2 extends Component {
  constructor(props) {
    super(props);

    if (props.data) {
      this.state = {
        users: [
          {name: 'Spongebob', phoneNumber: '479-387-5534'},
          {name: 'Patrick', phoneNumber: '479-256-5344'},
          {name: 'Sandy', phoneNumber: '367-899-7070'},
          {name: 'Squidward', phoneNumber: '367-345-9999'},
          {name: 'Mr. Krabs', phoneNumber: '504-214-3322'},
          {name: 'Gary', phoneNumber: '601-405-9977'},
        ],
        error: false,
      };
    } else {
      this.state = {
        users: [],
        error: true,
      };
    }
  }
  renderInfo = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          padding: 50,
        }}>
        <Text style={{padding: 20, flex: 1}}>{item.name}</Text>
        <Text>{item.phoneNumber}</Text>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.users}
          renderItem={this.renderInfo}
        />
      </View>
    );
  }
}
