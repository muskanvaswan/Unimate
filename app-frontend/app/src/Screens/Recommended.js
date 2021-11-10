import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper'
import Recommended from '../Recommended'
//import axios from '../../shared/api';

export default function App(props) {

  return (
    <View style={styles.container}>
      <View style={styles.colleges}><Recommended navigation={props.navigation} collegeNavigator={props.stacker}/></View>
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
    paddingBottom: 20
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
    left: -10,
    zIndex: -1
  }
});
