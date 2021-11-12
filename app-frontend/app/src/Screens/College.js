import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Text, Button, useTheme, FAB } from 'react-native-paper'
import axios from '../../shared/api'
import DeadlineCreate from '../DeadlineCreate'

export default function App(props) {
  const { colors } = useTheme();
  const college = props.route.params.college
  const [ deadlineVisible, setDeadlineVisible ] = React.useState(false);

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
    <ScrollView style={{padding: 20}}>

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
      {college.description != '' &&
        <View style={styles.description}>
          <Text>{college.description}</Text>
        </View>
      }
      <View style={styles.eligibility}>
        <View style={{width: '70%'}}>
          <Text style={styles.heading}>Eligibility</Text>
          <Text>Please note that this number was calculated only by available objective pointers. It is in no way a promise of admission or the lack of it. Remember, the college process is randomized to a large degree. </Text>
        </View>
        <View style={{width: '30%', justifyContent: 'center'}}>
          <Text style={[styles.heading, {color: statusColors[college.category], textAlign: 'center'}]}>{college.eligibility}</Text>
        </View>
      </View>
      <View style={[styles.scoreBoard, {backgroundColor: statusColors[college.category] + '20'}]}>
        <Text style={[styles.heading, {textAlign: 'center'}]}>Scores</Text>
        <View style={styles.scores}>
          <View style={styles.score}>
            <Text style={styles.rank}>{Math.round(college.research)}</Text>
            <Text style={{fontSize: 18}}>Research</Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.rank}>{Math.round(college.citations)}</Text>
            <Text style={{fontSize: 18}}>Citations</Text>
          </View>
        </View>
        <View style={styles.scores}>
          <View style={styles.score}>
            <Text style={styles.rank}>{Math.round(college.teaching)}</Text>
            <Text style={{fontSize: 18}}>Teaching</Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.rank}>{Math.round(college.income)}</Text>
            <Text style={{fontSize: 18}}>Income</Text>
          </View>
        </View>
        <View style={styles.scores}>
          <View style={styles.score}>
            <Text style={styles.rank}>{Math.round(college.international)}</Text>
            <Text style={{fontSize: 18}}>International</Text>
          </View>
          <View style={styles.score}>
            <Text style={[styles.rank, {color: colors.highlight}]}>{Math.round(college.total_score)}</Text>
            <Text style={{fontSize: 18, color: colors.highlight, fontWeight: 'bold'}}>Total</Text>
          </View>
        </View>
      </View>
      <Image style={styles.gradient} source={require('../../assets/gradient.png')} />

    </ScrollView>

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
    {deadlineVisible &&
      <>
        <View style={styles.backdrop} />
        {props.route.params.deletable && <DeadlineCreate setVisible={setDeadlineVisible}/>}
      </>
    }
    {props.route.params.deletable &&
      <FAB
        onPress={() => setDeadlineVisible(!deadlineVisible)}
        mode="contained"
        label={!deadlineVisible ? 'Add a deadline' : ""}
        style={[styles.fabLeft, {backgroundColor: deadlineVisible? colors.danger: colors.primary}]}
        icon={deadlineVisible? "close": "plus"}/>
    }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b1b1b',
    color: '#fff',
    width: '100%',
    overflow: 'scroll'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fabLeft: {
    position: 'absolute',
    margin: 16,
    left: 0,
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
  },
  description: {
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  eligibility: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'rgba(112, 110, 111, 0.43)',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  scoreBoard: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  score: {
    width: '50%',
    padding: 15,
    textAlign: 'center',
    alignItems: 'center'
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.77)',
    zIndex: 0
  }
});
