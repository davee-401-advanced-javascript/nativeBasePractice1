import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Content, Form, Item, Input, Button} from 'native-base';

import MyFooter from './my-footer.js';

export default function LoginPage({ navigation }) {
  return (

    <Container >
      <Content>

        <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>

          <Button block style={styles.buttons}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Button>

          <Button block danger style={styles.buttons}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>SKIP: Go To Main page</Text>
          </Button>

      </Content>
      <MyFooter />
    </Container>      

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  buttons: {
    margin: 20,
    height: 60
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  }
})