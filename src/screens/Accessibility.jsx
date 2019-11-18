import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Text, Button, Card, CardItem } from 'native-base';

const textContent = [
  'This is a test for accessibility feature',
  'Another sample text for testing purpose',
];

const Accessibility = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container style={styles.container}>
      <Card
        accessible={true}
        accessibilityLiveRegion="polite"
        style={styles.textBlock}
      >
        <CardItem>
          <Body>
            <Text>{textContent[currentPage]}</Text>
          </Body>
        </CardItem>
      </Card>
      <Button
        onPress={() =>
          currentPage === 0 ? setCurrentPage(1) : setCurrentPage(0)
        }
        accessible={true}
        accessibilityLabel="Next page button"
        accessibilityHint="Go to the next page"
      >
        <Text>Next page</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
});

export default Accessibility;
