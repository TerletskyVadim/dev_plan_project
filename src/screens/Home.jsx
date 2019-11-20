import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';

const Home = props => {
  const navigate = screen => props.navigation.navigate(screen);

  return (
    <Container style={styles.container}>
      <Button
        style={styles.navButton}
        info
        onPress={() => navigate('Animation')}
      >
        <Text>Animation</Text>
      </Button>
      <Button
        style={styles.navButton}
        info
        onPress={() => navigate('Accessibility')}
      >
        <Text>Accessibility</Text>
      </Button>
      <Button
        style={styles.navButton}
        info
        onPress={() => navigate('UX')}
      >
        <Text>UX</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    marginVertical: 10,
  },
});

export default Home;
