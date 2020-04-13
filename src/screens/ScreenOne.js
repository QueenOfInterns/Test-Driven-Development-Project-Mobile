/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Hello from './ScreenOne/hello.js';
import { connect } from 'react-redux';
import { addOne } from '../state/actions/addOne';

class ScreenOne extends Component {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        console.log('count', this.props.counter);
    }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen One</Text>
        <Hello />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.testReducer.counter
    }
}

const mapDispatchToProps = {
    Increment: addOne
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne);
