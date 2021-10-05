import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';

import { Avatar } from 'react-native-paper';

const Profile = () => (
  <View style={styles.profile}>
    <Image style={{height: 24, width: '100%'}} resizeMode="cover" source={require('../assets/muskan.jpeg')} />
  </View>
);

const MyComponent = () => (
 <Appbar style={styles.top}>
    <Appbar.Action icon="menu" onPress={() => console.log('Pressed mail')} />
    <View style={styles.right}>
      <Profile />
    </View>
  </Appbar>
 );

export default MyComponent

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingTop: 40,
    height: 80
  },
  right: {
    flex: 1,
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
