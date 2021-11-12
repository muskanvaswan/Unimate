import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper'
import Recommended from '../Recommended'
import axios from '../../shared/api';

function Deadlines({college, deadlines}) {
  return (
    <View>
      <Text>{college.name}</Text>
    </View>
  )
}


export default function Trackers(props) {

  const [ trackers, setTrackers ] = React.useState([])

  getData = () => {
    axios
      .get(`deadlines/`)
      .then(response => {
        setTrackers(response.data)
      })
      .catch(error => console.log(error))
  }

  React.useEffect(getData, [])

  renderCollege = (item, index) => {
    return <Deadlines key={index} college={item.college} deadlines={item.deadline} />
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        {trackers.map(renderCollege)}
      </ScrollView>
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
  gradient: {
    width: '200%',
    height: '150%',
    position: 'absolute',
    bottom: -450,
    left: -10,
    zIndex: -1
  }
});
