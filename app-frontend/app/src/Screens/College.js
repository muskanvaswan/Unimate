import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, useTheme, FAB } from 'react-native-paper'
import axios from '../../shared/api'

export default function App(props) {
  const { colors } = useTheme();
  const college = props.route.params.college

  addCollege = () => {
    axios
      .get(`/college/add/${props.route.params.college.id}/`, { college: props.route.params.college.id})
      .then(response => {
        props.navigation.goBack();
      })
      .catch(error => console.log(error));
  }
  deleteCollege = () => {
    axios
      .get(`/college/delete/${props.route.params.college.id}/`, { college: props.route.params.college.id})
      .then(response => {
        props.navigation.goBack()
      })
      .catch(error => console.log(error));
  }
  const statusColors = {
    "dream": colors.success,
    "target": colors.primary,
    "safety": colors.danger
  }

  const categoryBox = {
    backgroundColor: statusColors[college.category],
    shadowColor: statusColors[college.category],
    shadowRadius: 5,
    shadowOpacity: 1,
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{college.name}</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.tile}>
          <Text>World Rank</Text>
          <Text style={styles.rank}>{college.world_rank}</Text>
        </View>
        <View style={[styles.tile, categoryBox]}>
          <Text style={styles.category}>{college.category}</Text>
        </View>
      </View>
      {!props.route.params.deletable ?
        <FAB
          onPress={addCollege}
          mode="contained"
          style={[styles.fab, {backgroundColor: colors.primary}]}
          icon="plus"/>:
        <FAB
          onPress={deleteCollege}
          mode="contained"
          style={[styles.fab, {backgroundColor: colors.danger}]}
          icon="delete" />
    }
      <Image style={styles.gradient} source={require('../../assets/gradient.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    color: '#fff',
    padding: 20,
    width: '100%',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  title: {
    //marginTop: "30%",
    marginBottom: 20,
    fontSize: 50,
    fontWeight: "bold",
  },
  gradient: {
    width: '200%',
    height: '150%',
    position: 'absolute',
    top: -450,
    left: -10,
    zIndex: -1
  },
  tile: {
    width: '48%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(112, 110, 111, 0.43)',
    marginBottom: 10,
    marginHorizontal: 5
  },
  rank: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'rgba(66, 66, 66, 0.71)'
  }
});
