import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Container, Content } from 'native-base';

import MyFooter from './my-footer.js';

export default function LeaderBoard({ navigation }) {
  return (

    <Container >

        <Content>
          <View style={styles.container}>
            <Button
              title="Go to back to Main Page"
              onPress={() => navigation.navigate('Main')}
            />
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