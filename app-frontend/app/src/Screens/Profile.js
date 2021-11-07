import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper'

export default function App(props) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={require('../../assets/muskan.jpeg')} />
      <View style={styles.info}>
        <View style={styles.item}>
          <Text style={styles.key}>First Name</Text>
          <Text style={styles.value}>Muskan</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.key}>Last Name</Text>
          <Text style={styles.value}>Vaswan</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.key}>Username</Text>
          <Text style={styles.value}>muskanvaswan</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.key}>Email</Text>
          <Text style={styles.value}>muskanvaswan@gmail.com</Text>
        </View>

      </View>
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
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  key: {

    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
    fontSize: 20,
    textAlign: 'right',
  },
  gradient: {
    width: '200%',
    height: '150%',
    position: 'absolute',
    top: -450,
    left: -10,
    zIndex: -1
  },
  info: {
    marginTop: 50,
    width: '100%',
    padding: 30
  }
});
