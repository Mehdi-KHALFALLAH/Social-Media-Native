import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({container : {
flex : 1 ,
alignItems : "center",
justifyContent : "center"

}});