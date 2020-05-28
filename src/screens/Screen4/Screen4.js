import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import fetch from 'node-fetch';
import {SAVE_DATA} from '../../state/actions/actionTypes';

class Screen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall = () => {
    let data = null;
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
        });
        data = responseJson;
      });
    this.props.saveData(data);
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      console.log('movies:', this.props.movies);
      let movies = this.props.movies.map((item, key) => {
        return (
          <View key={key} style={styles.item}>
            <Text> {item.title}</Text>
            <Text> {item.releaseYear}</Text>
          </View>
        );
      });
      return <View style={styles.container}>{movies}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});

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
