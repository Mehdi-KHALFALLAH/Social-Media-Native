import React from "react";
import { View, Text, StyleSheet,ActivityIndicator } from "react-native";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
export default class LoadingScreen extends React.Component {
  componentDidMount() {
firebase.auth().onAuthStateChanged (user =>{
this.props.navigation.navigate(user?"App" :"Auth")


})


  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
