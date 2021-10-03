import React from "react";
import Entypo from 'react-native-vector-icons/Entypo'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import * as Animatable from 'react-native-animatable';
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
          <Text style={styles.greeting}> {`Hello again \n Welcome back`}</Text>
        </View>
        <View style={styles.errorMessage}>
          <Text>Error</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, ]}
        >
        
        <View style={styles.footer}>
          <View style={styles.form}>
          
          <Entypo name = "mail" style ={styles.inputTitle} > Email</Entypo>
            
          <TextInput
              
              
              placeholderTextColor="#666666"
               style={styles.input}
               secureTextEntry
               autoCapitalize="none"
               
               
             ></TextInput>
          </View>
          <View >
            <View style={styles.form}>
            <Entypo name = "key" style ={styles.inputTitle}> Password</Entypo>
            <View style = {styles.action}>
              <TextInput
              
               
               placeholderTextColor="#666666"
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                
              ></TextInput>
              
              </View>

            </View>
          </View>
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={{ color: "black", fontWeight: "500" }}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignUp}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
        </Animatable.View>
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
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
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
    fontSize: 12,
    
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
});
