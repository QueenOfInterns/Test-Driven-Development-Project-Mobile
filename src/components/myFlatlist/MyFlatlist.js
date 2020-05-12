import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet} from 'react-native';

class MyFlatlist extends Component {
          state = {
            users: [
              {name: 'Spongebob', phoneNumber: '479-387-5534'},
              {name: 'Patrick', phoneNumber: '479-256-5344'},
              {name: 'Sandy', phoneNumber: '367-899-7070'},
              {name: 'Squidward', phoneNumber: '367-345-9999'},
              {name: 'Mr. Krabs', phoneNumber: '504-214-3322'},
              {name: 'Gary', phoneNumber: '601-405-9977'},
            ],
          };

      render() {
        return (
          <View>
            <ScrollView>
              {
                this.state.users.map((item) => (
                    <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.phoneNumber}</Text>
                    </View>
                  ))
              }
            </ScrollView>
          </View>
        );
      }
}

export default MyFlatlist;

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 45,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})