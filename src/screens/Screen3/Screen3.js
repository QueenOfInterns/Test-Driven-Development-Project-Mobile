import React, {Component} from 'react';
import {View} from 'react-native';
import MyFlatlist from '../../components/myFlatlist/MyFlatlist';

export class Screen3 extends Component {

  userData = {
    users: [
      {name: 'Spongebob', phoneNumber: '479-387-5534'},
      {name: 'Patrick', phoneNumber: '479-256-5344'},
      {name: 'Sandy', phoneNumber: '367-899-7070'},
      {name: 'Squidward', phoneNumber: '367-345-9999'},
      {name: 'Mr. Krabs', phoneNumber: '504-214-3322'},
      {name: 'Gary', phoneNumber: '601-405-9977'},
    ],
  };
  render() {
    return (
      <View>
        <MyFlatlist data = {this.userData}></MyFlatlist>
      </View>
    );
  }
}