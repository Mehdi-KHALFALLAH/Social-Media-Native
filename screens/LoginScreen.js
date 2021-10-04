import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-paper";
import { SocialIcon } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Touchable,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Blink from "../assets/Blink";
export default class LoginScreen extends React.Component {
   defaultnavigationsOptions = {
    header: null,
  };

  state = {
    email: "",
    password: "",
    errorMessage: null,
  };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />

            <View style={styles.header}>
              <Text style={styles.greeting}>
                {" "}
                {`Hello again \n Welcome back`}
              </Text>
            </View>
            <View style={styles.errorMessage}>
              {this.state.errorMessage && (
                <Text style={styles.error}> {this.state.errorMessage}</Text>
              )}
            </View>
            <Animatable.View
              animation="fadeInUpBig"
              duration={1500}
              style={[styles.footer]}
            >
              <View style={styles.footer}>
                <View style={styles.form}>
                  <Entypo name="mail" style={styles.inputTitle}>
                    {" "}
                    Email
                  </Entypo>

                  <TextInput
                    placeholderTextColor="#666666"
                    style={styles.input}
                    mode="outlined"
                    autoCapitalize="none"
                    label="Your email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                  ></TextInput>
                </View>
                <View>
                  <View style={styles.form}>
                    <Entypo name="key" style={styles.inputTitle}>
                      {" "}
                      Password
                    </Entypo>
                    <TextInput
                      placeholderTextColor="#666666"
                      style={styles.input}
                      secureTextEntry
                      mode="outlined"
                      autoCapitalize="none"
                      label="Your password"
                      right={<TextInput.Icon name="eye" />}
                      label="Your password"
                      onChangeText={(password) => this.setState({ password })}
                      value={this.state.password}
                    ></TextInput>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonSignIn}
                  onPress={this.handleLogin}
                >
                  <Text style={{ color: "black", fontWeight: "500" }}>
                    Sign in
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 15,
                  }}
                >
                  <SocialIcon
                    title="Google"
                    type="google"
                    onPress={() => {
                      alert("google");
                    }}
                  />
                  <SocialIcon
                    title="Facebook"
                    type="facebook"
                    onPress={() => {
                      alert("facebook");
                    }}
                  />
                  <SocialIcon
                    title="Github"
                    type="github"
                    onPress={() => {
                      alert("github");
                    }}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 10 }}
                    onPress={() => this.props.navigation.navigate("Register")}
                  >
                    <Text>
                      new social media?{" "}
                      <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                        {" "}
                        Sign Up
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animatable.View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
  },
  errorMessage: {
    height: 72,
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 50,
  },
  error: {
    color: "black",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 30,
    marginHorizontal: 20,
  },
  input: {
    color: "#8A8F9E",
    fontSize: 14,

    textTransform: "uppercase",
  },
  inputTitle: {
    height: 25,
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
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
});
