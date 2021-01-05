import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Content } from 'native-base';

import MyHeader from './my-header.js';
import MyFooter from './my-footer.js';

export default function LoginPage() {
  return (

    <Container >
      <MyHeader />
        <Content>
          <View style={styles.container}>
            <Text>Login Page</Text>
          </View>
        </Content>
      <MyFooter />
    </Container>      
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})