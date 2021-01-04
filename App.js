import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from "react-native";

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/platform';

import MyHeader from './components/my-header.js';
import Main from './components/main.js'
import MyFooter from './components/my-footer.js';


export default function App() {
  [isReady, setReady] = useState(false);

  useEffect(() => {
    native_base();
    setReady(true);
   });

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
    <StyleProvider style={getTheme(material)}>
      <Container >
        <MyHeader />
          <Content>
            <Main />
          </Content>
        <MyFooter />
      </Container>
    </StyleProvider>
  );
  return app;
}
