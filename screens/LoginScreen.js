import React from "react";
import Entypo from 'react-native-vector-icons/Entypo'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  
} from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}> {`Hello again \n Welcome back`}</Text>
        </View>
        <View style={styles.errorMessage}>
          <Text>Error</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.form}>
          
          <Entypo name = "mail" style ={styles.inputTitle} > Email</Entypo>
            
            <TextInput style={styles.input} autoCapitalize="none"></TextInput>
          </View>
          <View>
            <View style={styles.form}>
            <Entypo name = "key" style ={styles.inputTitle}> Password</Entypo>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={{ color: "black", fontWeight: "500" }}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignUp}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsla(346, 79%, 59%, 0.8)",
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  greeting: {
    marginTop: 32,
    fontSize: 30,
    fontWeight: "400",
    marginHorizontal: 20,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 35
  
  },
  errorMessage: {
    height: 72,
    alignItems:"flex-start",
    justifyContent: "center",
    marginHorizontal: 50,
  },
  form: {
    marginBottom: 30,
    marginHorizontal: 20,
  },
  input: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  inputTitle: {
    
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 17,
    color: "#161F3D",
  },
  buttonSignIn: {
    marginHorizontal: 30,
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E9446A",
    borderBottomWidth: 1,
    
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  buttonSignUp: {
    backgroundColor: "hsla(346, 79%, 59%,0.8)",
    marginHorizontal: 30,
    marginTop: 25,
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
