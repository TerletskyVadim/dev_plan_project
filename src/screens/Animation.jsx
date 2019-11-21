import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';

const Animation = () => {
  let animValue = 0;

  const anim = new Animated.Value(0);
  const animListener = anim.addListener(({ value }) => {
    animValue = value;
    animValue > 6 && anim.setValue(0);
  });

  useEffect(() => () => anim.removeListener(animListener));

  const rotate = anim.interpolate({
    inputRange: [0, 6],
    outputRange: ['0deg', '360deg'],
  });
  const roundness = anim.interpolate({
    inputRange: [0, 3, 6],
    outputRange: [0, 48, 0],
  });

  const runAnim = () => {
    const nextVal = animValue + 1;

    Animated.spring(anim, {
      toValue: nextVal,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          { transform: [{ rotate }], borderRadius: roundness },
        ]}
      />
      <Button onPress={runAnim}>
        <Text>Press me</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Animation;
