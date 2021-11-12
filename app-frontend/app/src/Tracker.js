import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper'

import normalize from './responsiveFont'


const Tracker = (props) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return (
     <View style={styles.root}>
      <View style={styles.item1}>
        <Text style={{fontSize: normalize(12), marginVertical: 5, opacity: 0.6}}>You have</Text>
        <Text style={{fontSize: normalize(45), opacity: 0.6}}>{props.count}</Text>
        <Text style={{fontSize: normalize(12), opacity: 0.6}}>Upcoming Deadlines</Text>
      </View>
      <View style={styles.item2}>
        <Text style={{fontSize: normalize(10), textAlign: 'right', marginVertical: 5, opacity: 0.6}}>Your closest deadline is on</Text>
        <Text style={{fontSize: normalize(35), textAlign: 'right', marginVertical: 5, opacity: 0.6}}>{props.date.getDate()} {monthNames[props.date.getMonth()].slice(0, 3)}</Text>
        <Text style={{fontSize: normalize(20), textAlign: 'right', opacity: 0.6}}>{props.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </View>
    </View>
   );
 }

export default Tracker

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
  },
  item1: {
    //position: 'absolute',
    left: normalize(10),
  },
  item2: {
    //position: 'absolute',
    right: normalize(10),

  }
});
