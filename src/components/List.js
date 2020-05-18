import React from 'react';
import { View, Text } from 'react-native';

const List = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default List;