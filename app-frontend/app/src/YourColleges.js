import React from 'react';
import normalize from './responsiveFont'
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-paper'
import { useTheme } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wisconssin Maddison',
    description: 'Cambridge Boston',
    status: 'remaining'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Harvard University',
    description: 'Cambridge Boston',
    status: 'complete'
  },
  {
    id: '58694a0f-3da1-471f',
    title: 'Purdue University',
    description: 'Cambridge Boston',
    status: 'urgent'
  },
  {
    id: '58694a0f-3da1',
    title: 'Third Item',
    description: 'Cambridge Boston',
    status: 'complete'
  },
  {
    id: '58694a0f',
    title: 'Third Item',
    description: 'Cambridge Boston',
    status: 'complete'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba23oi43',
    title: 'Wisconssin Maddison',
    description: 'Cambridge Boston',
    status: 'remaining'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6323iy43',
    title: 'Harvard University',
    description: 'Cambridge Boston',
    status: 'complete'
  },
  {
    id: '58694a0f-3da1-471f32uy43',
    title: 'Purdue University',
    description: 'Cambridge Boston',
    status: 'urgent'
  },
  {
    id: '58694a0f-3da1i3yi4',
    title: 'Third Item',
    description: 'Cambridge Boston',
    status: 'complete'
  },
  {
    id: '58694a0f738',
    title: 'Third Item',
    description: 'Cambridge Boston',
    status: 'complete'
  },
];


const Item = ({ title, description, status}) => (
  <View style={styles.item}>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.title}>{title}</Text>
    <View style={[styles.status, {backgroundColor: status}]}/>
  </View>
);

const App = (props) => {
  const { colors } = useTheme();
  const statusColors = {
    "complete": colors.success,
    "remaining": colors.waiting,
    "urgent": colors.danger
  }
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} status={statusColors[item.status]}/>
  );
  return (
    <View style={styles.container}>
      {!props.withoutTitle && <Text style={styles.heading}>Your Colleges</Text>}
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
  status: {
    position: 'absolute',
    width: normalize(10),
    height: normalize(10),
    bottom: normalize(10),
    borderRadius: 50,
    overflow: 'hidden',
    right: 0,
  }
});

export default App;
