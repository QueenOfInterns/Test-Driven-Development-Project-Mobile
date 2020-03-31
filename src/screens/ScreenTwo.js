import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ScreenTwo extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Screen Two</Text>
            </View>
        );
    }
}