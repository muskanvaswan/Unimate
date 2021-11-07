import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, TextInput, Divider, useTheme } from 'react-native-paper'
import axios from 'axios';

export default function App({ navigation }) {
  const { colors } = useTheme();
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ error, setError ] = React.useState(false);
  const [ visible, setVisible ] = React.useState(false);

  const login = () => {
    const payload = { username: username, password: password }

    axios
      .post(`/auth/login/`, payload)
      .then(response => {
        const { token, user } = response.data;

        // We set the returned token as the default authorization header
        axios.defaults.headers.common.Authorization = `Token ${token}`;

        // Navigate to the home screen
        navigation.jumpTo('Dashboard')
      })
      .catch(error => setError(true));
  }
  return (
    <View style={styles.container}>
      <Button
        color={colors.highlight}
        onPress={() => navigation.jumpTo('SignUp')}
        mode="outlined"
        style={styles.button}
      >
        Sign Up
      </Button>
      <Text style={{width: '90%', color: 'rgb(145, 147, 148)', marginBottom: 20}}>Don't have an account? Create one here</Text>
      <Divider style={{
        width: '95%',
        backgroundColor: 'rgba(255, 255, 255, 0.51)',
        marginBottom: 20
      }}/>
      <TextInput
        label="Username"
        value={username}
        style={styles.input}
        onChangeText={username => setUsername(username)}
        underlineColor={colors.highlight}
        autoCapitalize="none"
        error={error}
      />
      <TextInput
        label="Password"
        value={password}
        style={styles.input}
        onChangeText={password => setPassword(password)}
        underlineColor={colors.highlight}
        autoCapitalize="none"
        error={error}
        secureTextEntry={!visible}
        right={<TextInput.Icon onPress={() => setVisible(visible => !visible)} name={visible? "eye": "eye-off"} />}
      />
      <Button
        mode="contained"
        color={colors.highlight}
        style={styles.button}
        onPress={login}>
        Log In
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    color: '#fff',
    paddingTop: 90,
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignSelf: 'center'
  },
  input: {
    width: '90%',
    height: 60,
    marginVertical: 10
  },
  button: {
    width: '90%',
    marginVertical: 10
  },
  gradient: {
    width: '200%',
    height: '150%',
    position: 'absolute',
    top: -450,
    left: -10
  },
});
