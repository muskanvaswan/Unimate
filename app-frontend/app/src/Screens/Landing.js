import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper'

export default function App(props) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.title}>Welcome to Unimate</Text>
      <Button
        mode="contained"
        color={colors.highlight}
        style={styles.button}
        onPress={() => props.navigation.push('Account')}>
        Continue
      </Button>
      <Image style={styles.gradient} source={require('../../assets/gradient.png')} />
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
  logo: {
    width: 400,
    height: 400
  },
  title: {
    marginTop: "30%",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    width: '60%',
  },
  gradient: {
    width: '200%',
    height: '150%',
    position: 'absolute',
    top: -450,
    left: -10
  },
});
