import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';

const Home = props => {
  const navigate = screen => props.navigation.navigate(screen);

  return (
    <Container style={styles.container}>
      <Button info onPress={() => navigate('Animation')}>
        <Text>Animation</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
