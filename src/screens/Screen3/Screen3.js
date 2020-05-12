import React, {Component} from 'react';
import {View} from 'react-native';
import MyFlatlist from '../../components/myFlatlist/MyFlatlist';

export class Screen3 extends Component {
  render() {
    return (
      <View>
        <MyFlatlist />
      </View>
    );
  }
}