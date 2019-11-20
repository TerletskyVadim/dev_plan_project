import React, { useRef, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Item,
  Form,
  Input,
  Text,
  Button,
} from 'native-base';

const UX = () => {
  const passwordRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const focusPassword = () =>
    passwordRef.current && passwordRef.current.wrappedInstance.focus();

  const onChangeUsername = value => setUsername(value);
  const onChangePassword = value => setPassword(value);

  const submit = () => {
    Alert.alert(`Welcome, ${username}!`);

    setUsername('');
    setPassword('');
  };

  return (
    <Container style={styles.container}>
      <Content
        contentContainerStyle={styles.contentContainer}
        style={styles.content}
      >
        <Form>
          <Item stackedLabel={true} style={styles.item}>
            <Input
              type="email"
              keyboardType="email-address"
              autoFocus={true}
              returnKeyType="next"
              blurOnSubmit={false}
              placeholder="Username"
              value={username}
              onChangeText={onChangeUsername}
              onSubmitEditing={focusPassword}
            />
          </Item>
          <Item stackedLabel={true} style={styles.item}>
            <Input
              ref={passwordRef}
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={onChangePassword}
              onSubmitEditing={submit}
            />
          </Item>
          <Button style={styles.sendButton} onPress={submit}>
            <Text>Send</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    width: 300,
  },
  item: {
    marginVertical: 5,
  },
  sendButton: {
    marginVertical: 30,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default UX;
