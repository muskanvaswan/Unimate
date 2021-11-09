import React from 'react';
import normalize from './responsiveFont'
import { View, FlatList, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { Text, ActivityIndicator, Colors } from 'react-native-paper'
import { useTheme } from 'react-native-paper';
import axios from 'axios';


const Loading = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
    <ActivityIndicator animating={true} color={Colors.purple800} size={70} />
  </View>
);

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


const Item = ({ title, description, category, status, compatibility, item, navigation}) => (
  <TouchableHighlight onPress={() => navigation.jumpTo('College', { college: item })}>
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
  </TouchableHighlight>
);

const App = (props) => {
  const { colors } = useTheme();
  const [ loading, setLoading ] = React.useState(false);
  const [ data, setData ] = React.useState([]);

  categorize = (score) => {
    if (9 <= score && score <= 10)
      return "target"
    else if (score < 9)
      return "dream"
    else if (score > 10)
      return "safety"
  }
  elipsise = (name) => {
    return (name.length > 20? name.slice(0, 17) + "..." : name)
  }
  calculateRec = (college) => {
    let score = college.world_rank / 100 + 8.8
    college['compatibility'] = String(Math.round(score * 1000) / 100) + '%'
    college['category'] = categorize(score)
    college['name'] = elipsise(college['name'])
    college['id'] = college['id'].toString()
    return college
  }

  getData = () => {
    setLoading(true);
    axios
      .get(`/colleges/`)
      .then(response => {
        var colleges = response.data;

        colleges = colleges.slice(0, 300)
        console.log("now")
        colleges.forEach(calculateRec);


        setData(colleges)
        setLoading(false)
      })
      .catch(error => console.log(error));
  }

  React.useEffect(() => {
    getData();
  }, [])
  const statusColors = {
    "dream": colors.success,
    "target": colors.primary,
    "safety": colors.danger
  }
  const renderItem = ({ item }) => (
    <Item
      title={item.name}
      description={item.country}
      category={item.category}
      compatibility={item.compatibility}
      status={statusColors[item.category]}
      item={item}
      navigation={props.navigation}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recommended</Text>
      {loading?
        <Loading />
        : <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }

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
