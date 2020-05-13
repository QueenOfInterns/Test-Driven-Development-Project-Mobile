/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

export class Screen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        });
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      let movies = this.state.dataSource.map((item, key) => {
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
