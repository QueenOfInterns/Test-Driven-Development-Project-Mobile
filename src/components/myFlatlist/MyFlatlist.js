import React, { Component } from 'react';
import { ScrollView, View, Text} from 'react-native';

class MyFlatlist extends Component {
    state = {
        names: [
            {'name': 'Test1', 'id': 1},
            {'name': 'Test2', 'id': 2},
            {'name': 'Test3', 'id': 3},
            {'name': 'Test4', 'id': 4},
            {'name': 'Test5', 'id': 5},
            {'name': 'Test6', 'id': 6},
            {'name': 'Test7', 'id': 7},
            {'name': 'Test8', 'id': 8},
            {'name': 'Test9', 'id': 9}
        ]
    }
    render = () => {

        return (
            <View>
                <ScrollView>
                    {
                    this.state.names.map((item) => (
                        <View key = {item.id}>
                            <Text>{item.name}</Text>
                        </View>
                    ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default MyFlatlist;