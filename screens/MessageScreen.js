import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";

export default class MessageScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> message screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({container : {
flex : 1 ,
alignItems : "center",
justifyContent : "center"

}});
