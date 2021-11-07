import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, TextInput, Divider, useTheme } from 'react-native-paper'

export default function App({ navigation }) {
  const { colors } = useTheme();
  const [ username, setUsername ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  return (
    <View style={styles.container}>
      <Button
        color={colors.highlight}
        onPress={() => navigation.jumpTo('Dashboard')}
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
      />
      <TextInput
        label="Password"
        value={password}
        style={styles.input}
        onChangeText={password => setPassword(password)}
        underlineColor={colors.highlight}
      />
      <Button
        mode="contained"
        color={colors.highlight}
        style={styles.button}
        onPress={() => navigation.jumpTo('Dashboard')}>
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
