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
        //add user objects
      ],
      //add error state
    };
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
        {/*display the users name in the first text field and phoneNumber in the second.
        Since item is passed in, you can access the user object by using item.[property] just like in c++ or java*/}
        <Text style={{padding: 20, flex: 1}}>{/*name here*/}</Text>
        <Text>{/*phoneNumber here*/}</Text>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          //keyExtractor here
          //data here
          //rederItem here
          data={this.state.users}
          renderItem={this.renderInfo}
        />
      </View>
    );
  }
}
