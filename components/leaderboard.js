import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Content, Button} from 'native-base';

import MyFooter from './my-footer.js';

export default function LeaderBoard({ navigation }) {
  return (

    <Container >

        <Content>
          <View style={styles.container}>

          <Button block success style={styles.buttons}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Go Back To Main page</Text>
          </Button>

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