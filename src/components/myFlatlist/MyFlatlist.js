import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet} from 'react-native';

class MyFlatlist extends Component {
    constructor(props) {
        super(props);
    
        if (props.data) {
          this.state = {
            users: props.data.users,
            error: false,
          };
        } else {
          this.state = {
            users: [],
            error: true,
          };
        }
      }
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