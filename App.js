import React, { useState, useEffect } from 'react';
import { StyleSheet, View} from "react-native";


import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Accelerometer } from 'expo-sensors';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { StyleProvider, Container, Content } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/platform';



import Main from './components/main.js'
import LoginPage from './components/login-page.js';
import LeaderBoard from './components/leaderboard.js';


export default function App() {
  const [isReady, setReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    native_base();
    setReady(true);
    load();
   });

   async function load() {
     try{
      let {status} = await Accelerometer.isAvailableAsync();

      if(status !== 'granted') {
        setErrorMessage('Access to Accelerometer is needed to run the app')
        return;
      }
     } catch (error) {
      console.log(error);
     }
   }

   async function native_base() {
     await Font.loadAsync({
       Roboto: require("native-base/Fonts/Roboto.ttf"),
       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
       ...Ionicons.font,
     });
   }

  const app = !isReady ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <StyleProvider style={getTheme(material)}>

        <Main />

      </StyleProvider>
    </NavigationContainer>
  );
  return app;
}
