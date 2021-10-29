import React from 'react';
import normalize from './responsiveFont'
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-paper'
import { useTheme } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wisconssin Madd...',
    description: 'Cambridge Boston',
    category: 'target',
    compatibility: "98%"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Harvard University',
    description: 'Cambridge Boston',
    category: 'dream',
    compatibility: "98%"
  },
  {
    id: '58694a0f-3da1-471f',
    title: 'Purdue University',
    description: 'Cambridge Boston',
    category: 'safety',
    compatibility: "98%"
  },
  {
    id: '58694a0f-3da1',
    title: 'Third Item',
    description: 'Cambridge Boston',
    category: 'dream',
    compatibility: "98%"
  },
  {
    id: '58694a0f',
    title: 'Third Item',
    description: 'Cambridge Boston',
    category: 'dream',
    compatibility: "98%"
  },
];


const Item = ({ title, description, category, status, compatibility}) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={[styles.category, {color: status}]}>{category}</Text>
    <View style={styles.status}>
      <Text style={[styles.category, {color: status}]}>{compatibility}</Text>
      <Text style={styles.description}>Compatibility</Text>
    </View>
  </View>
);

const App = (props) => {
  const { colors } = useTheme();
  const statusColors = {
    "dream": colors.success,
    "target": colors.primary,
    "safety": colors.danger
  }
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} category={item.category} compatibility={item.compatibility} status={statusColors[item.category]}/>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recommended</Text>
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
    position: 'relative',
    paddingTop: normalize(15),
    paddingBottom: normalize(5),
    display: 'flex',
    flexDirection: 'row',
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
  },
  category: {

    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginHorizontal: 10
  },
  status: {
    position: 'absolute',
    right: 0,
    bottom: normalize(10),
  }
});

export default App;
