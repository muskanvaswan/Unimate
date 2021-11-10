import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper'
import axios from '../../shared/api'

export default function App(props) {
  const { colors } = useTheme();

  getData = () => {
    axios
      .get(`/college/add/${props.route.params.college.id}/`, { college: props.route.params.college.id})
      .then(response => {
        console.log('added')
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{props.route.params.college.name}</Text>
      <Button
        onPress={getData}
        mode="contained"
        color={colors.success}
        icon="plus">
        Add
      </Button>
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
