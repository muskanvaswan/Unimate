import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper'
import axios from '../../shared/api'

export default function App(props) {
  const { colors } = useTheme();

  addCollege = () => {
    axios
      .get(`/college/add/${props.route.params.college.id}/`, { college: props.route.params.college.id})
      .then(response => {
        console.log('added')
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

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{props.route.params.college.name}</Text>
      {!props.route.params.deletable ?
        <Button
          onPress={addCollege}
          mode="contained"
          color={colors.primary}
          icon="plus">
          Add
        </Button>:
        <Button
          onPress={deleteCollege}
          mode="contained"
          color={colors.danger}
          icon="delete">
          Delete
        </Button>
    }
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
  },
  title: {
    marginTop: "30%",
    marginBottom: 20,
    fontSize: 30,
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
});
