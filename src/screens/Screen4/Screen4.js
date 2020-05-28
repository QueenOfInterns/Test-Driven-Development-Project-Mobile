import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import fetch from 'node-fetch';
import {SAVE_DATA} from '../../state/actions/actionTypes';
import MyFlatlist from '../../components/myFlatlist/MyFlatlist';

class Screen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.state.isLoading = true;
    this.apiCall();
  }

  apiCall = () => {
    var data = [];
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
        });
        data = responseJson.movies;
        //change releaseYear field to body
        data.map(item => {
          item.body = item.releaseYear;
          delete item.releaseYear;
        });
        this.props.saveData(data);
      });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View>
          <MyFlatlist data={this.props.movies} />
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  movies: state.mainReducer.movies,
});

const mapDispatchToProps = dispatch => {
  return {
    saveData: data => {
      dispatch({type: SAVE_DATA, payload: data});
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen4);
