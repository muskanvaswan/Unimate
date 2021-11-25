import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';

import { Avatar } from 'react-native-paper';
import axios, { setClientToken } from '../shared/api';

const Profile = () => (
  <View style={styles.profile}>
    <Image style={{height: 24, width: '100%'}} resizeMode="cover" source={require('../assets/muskan.jpeg')} />
  </View>
);

const MyComponent = ({ navigation, stacker }) => {
  const logout = () => {
    axios
      .get('/auth/logout/')
      .then(response => stacker.goBack())
      .catch(error => console.log(error))
  }
  return (
   <Appbar style={styles.top}>
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      <Appbar.Action icon="logout" style={styles.right} onPress={logout} />
    </Appbar>
   );
}


export default MyComponent

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingTop: 40,
    height: 80,
    flex: 1
  },
  right: {
    left: '75%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  profile: {
    borderRadius: 50,
    width: 24,
    height: 24,
    alignSelf: 'center',
    overflow: 'hidden'
  }
});
