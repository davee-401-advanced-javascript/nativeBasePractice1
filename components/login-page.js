import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})