import React from 'react';
import normalize from './responsiveFont'
import { View, FlatList, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { Text, ActivityIndicator, Colors } from 'react-native-paper'
import { useTheme } from 'react-native-paper';
import axios from '../shared/api';

const Loading = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
    <ActivityIndicator animating={true} color={Colors.purple800} size={70} />
  </View>
);

const Item = ({ title, description, category, status, compatibility, item, navigation}) => (
  <TouchableHighlight onPress={() => navigation.push('College', { college: item })}>
    <View style={styles.item}>
      <View>
        <Text style={styles.description}>{description}</Text>
        <Text style={[styles.title, {color: status}]}>{title}</Text>
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
    return (name.length > 30? name.slice(0, 27) + "..." : name)
  }
  calculateRec = (college) => {
    let score = college.world_rank / 100 + 8.8
    college['category'] = categorize(score)
    college['id'] = college['id'].toString()
    return college
  }

  getData = () => {
    setLoading(true);
    axios
      .get(`/profile/`)
      .then(response => {
        const profile = response.data;
        var colleges = profile.colleges
        colleges.forEach(calculateRec)
        setData(colleges)
        //console.log(profile.colleges)
        setLoading(false)
      })
      .catch(error => console.log(error));
  }

  React.useEffect(getData, [props.navigation, props.stacker])

  const statusColors = {
    "dream": colors.success,
    "target": colors.primary,
    "safety": colors.danger
  }

  const renderItem = ({ item }) => (
    <Item
      title={elipsise(item.name)}
      description={item.country}
      category={item.category}
      status={statusColors[item.category]}
      item={item}
      navigation={props.collegeNavigator}
    />
  );

  return (
    <View style={styles.container}>
      {!props.withoutTitle && <Text style={styles.heading}>Your Colleges</Text>}
      {!loading ? <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />: <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
