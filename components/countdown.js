import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function CountDown() {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={3}
        colors="#004777"
        onComplete={() => {
          return [true, 0]
        }}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text
            style={{ ...styles.remainingTime, color: animatedColor }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  remainingTime: {
    fontSize: 46,
  },
});