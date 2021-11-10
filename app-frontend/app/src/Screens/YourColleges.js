import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper'
import Colleges from '../YourColleges'

export default function App(props) {
  return (
      <View style={styles.container}>
        <View style={styles.colleges}><Colleges navigation={props.navigation} collegeNavigator={props.stacker}/></View>
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
    width: '100%'
  },
  colleges: {
    //marginTop: 10,
    marginBottom: 10,
    //height: '40%',
    flex: 1,
    width: '100%',
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
