import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { SAVE_DATA } from '../../state/actions/actionTypes';

class Screen4 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.apiCall({name: 'hello'});
  }
  
  render() {
    console.log(this.props.movies);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen Four</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
      apiCall: (data) => {
          dispatch({ type: SAVE_DATA, payload: data })
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen4);
