import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper'
import Topbar from './TopBar'
import Colleges from './YourColleges'

export default function App(props) {
  return (
    <View style={styles.container}>
    <Topbar />
    <StatusBar style="auto" />

    <View style={styles.tracker} />
    <View style={styles.colleges}><Colleges /></View>
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
    color: '#fff',
    paddingTop: 90,
    paddingBottom: 20
  },
  tracker: {
    height: '20%',
    width: '90%',
    backgroundColor: 'rgba(48, 48, 48, 0.41)',
    //mixBlendMode: 'normal',
    shadowColor: 'rgba(70, 70, 70, 0.17)',
    marginBottom: 10,
    borderRadius: 10,
  },
  colleges: {
    //marginTop: 10,
    marginBottom: 10,
    //height: '40%',
    flex: 1,
    width: '90%',
    backgroundColor: 'rgba(58, 57, 57, 0.2)',
    borderRadius: 10,
    overflow: 'scroll'
  },
  gradient: {
    width: '200%',
    height: '150%',
    position: 'absolute',
    bottom: -450,
    left: -10
  }
});
