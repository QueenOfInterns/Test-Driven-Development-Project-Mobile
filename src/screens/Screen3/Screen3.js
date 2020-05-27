import React, {Component} from 'react';
import {View} from 'react-native';
import MyFlatlist from '../../components/myFlatlist/MyFlatlist';

export class Screen3 extends Component {

  userData = {
    users: [
      {title: 'Spongebob', body: '479-387-5534'},
      {title: 'Patrick', body: '479-256-5344'},
      {title: 'Sandy', body: '367-899-7070'},
      {title: 'Squidward', body: '367-345-9999'},
      {title: 'Mr. Krabs', body: '504-214-3322'},
      {title: 'Gary', body: '601-405-9977'},
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