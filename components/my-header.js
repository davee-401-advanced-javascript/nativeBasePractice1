import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from "react-native";

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { Container, Header, Title, Content, Left, Right, Body } from 'native-base';


export default function MyHeader() {
  return (
    <Header style={styles.text}>
      {/* <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left> */}
      <Body>
        <Title >Punch Speed App</Title>
      </Body>
      {/* <Right /> */}
    </Header>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // backgroundColor: 'rgb(10, 187, 10)',

  },
});