import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreens";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MessageScreen from "./screens/MessageScreen";
import NotificationScreen from "./screens/NotificationScreen";
import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD7RnVI4dEcwMHUE65yING0f0RTpi84PM",
  authDomain: "socialmediaapp-59c71.firebaseapp.com",
  projectId: "socialmediaapp-59c71",
  storageBucket: "socialmediaapp-59c71.appspot.com",
  messagingSenderId: "321725060726",
  appId: "1:321725060726:web:bd4ac99ea66a115b42f157",
};
const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      
    },
  }
  
);
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
