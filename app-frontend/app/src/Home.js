import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper'
import Topbar from './TopBar'

export default function App(props) {
  return (
    <View style={styles.container}>
    <Topbar />
    <StatusBar style="auto" />

    <View style={styles.tracker} />
    <View style={styles.colleges} />
    <Image style={styles.gradient} source={require('../assets/gradient.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    //justifyContent: 'center',
    color: '#fff',
    paddingTop: 90
  },
  tracker: {
    height: '20%',
    width: '90%',
    backgroundColor: 'rgba(48, 48, 48, 0.41)',
    //mixBlendMode: 'normal',
    shadowColor: 'rgba(70, 70, 70, 0.17)',
    borderRadius: 10,
  },
  gradient: {
    width: '200%',
    height: '150%',
    position: 'absolute',
    bottom: -450,
    left: -10
  }
});
