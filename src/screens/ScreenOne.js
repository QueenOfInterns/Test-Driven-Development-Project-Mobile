import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ScreenOne extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Screen One</Text>
            </View>
        );
    }
}