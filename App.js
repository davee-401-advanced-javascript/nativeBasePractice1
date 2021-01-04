import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from "react-native";

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { Container, Text } from 'native-base';


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
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
    </Container>
  );
  return app;
}





// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });