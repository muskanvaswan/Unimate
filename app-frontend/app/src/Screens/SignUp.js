import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, TextInput, Divider, useTheme } from 'react-native-paper'
import axios from 'axios';

export default function App({ navigation }) {
  const { colors } = useTheme();
  const [ firstName, setFirstName ] = React.useState('');
  const [ lastName, setLastName ] = React.useState('');
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const register = () => {
    const payload = {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName
     }

    axios
      .post(`/auth/register/`, payload)
      .then(response => {
        const { token, user } = response.data;

        // We set the returned token as the default authorization header
        axios.defaults.headers.common.Authorization = `Token ${token}`;

        // Navigate to the home screen
        navigation.jumpTo('Dashboard')
      })
      .catch(error => console.log(error));
  }
  return (
    <View style={styles.container}>

      <TextInput
        label="First Name"
        value={firstName}
        style={styles.input}
        onChangeText={firstName => setFirstName(firstName)}
        underlineColor={colors.highlight}
        autoCapitalize="none"
      />
      <TextInput
        label="Last Name"
        value={lastName}
        style={styles.input}
        onChangeText={lastName => setLastName(lastName)}
        underlineColor={colors.highlight}
        autoCapitalize="none"
      />
      <TextInput
        label="Username"
        value={username}
        style={styles.input}
        onChangeText={username => setUsername(username)}
        underlineColor={colors.highlight}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        style={styles.input}
        onChangeText={password => setPassword(password)}
        underlineColor={colors.highlight}
        autoCapitalize="none"
      />
      <Button
        mode="contained"
        color={colors.highlight}
        style={styles.button}
        onPress={register}>
        Sign Up
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
