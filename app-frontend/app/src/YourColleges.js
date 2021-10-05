import React from 'react';
import normalize from './responsiveFont'
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-paper'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: 'A curated list of Bash commands'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description: 'A curated list of Bash commands'
  },
  {
    id: '58694a0f-3da1-471f',
    title: 'Third Item',
    description: 'A curated list of Bash commands'
  },
  {
    id: '58694a0f-3da1',
    title: 'Third Item',
    description: 'A curated list of Bash commands'
  },
  {
    id: '58694a0f',
    title: 'Third Item',
    description: 'A curated list of Bash commands'
  },
];

const Item = ({ title, description}) => (
  <View style={styles.item}>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description}/>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Colleges</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(10),
  },
  heading: {
    fontSize: 30
  },
  item: {
    paddingTop: normalize(15),
    paddingBottom: normalize(5),
    marginVertical: 2,
    marginHorizontal: 5,
    borderBottomColor: 'rgba(152, 152, 152, 0.67)',
    borderBottomWidth: 1

  },
  title: {
    fontSize: Platform.OS === 'android'? normalize(15): normalize(18),
    color: 'rgb(213, 215, 214)'
  },
  description: {
    fontSize: normalize(8),
    //color: 'rgb(147, 144, 146)'
  }
});

export default App;
