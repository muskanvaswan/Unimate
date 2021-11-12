import React from 'react'
import { Text, IconButton } from 'react-native-paper'
import { View, StyleSheet, FlatList } from 'react-native'
import axios from '../shared/api'

const Deadline = ({ id, date, title, status, collegeId, setDeadlines }) => {
  var dateFormatted = new Date(date)

  deleteDeadline = () => {
    axios
      .get(`deadline/delete/${id}/`)
      .then(reponse => {
        axios
          .get(`deadline/${collegeId}/`)
          .then(response => {
            const data = response.data.deadline
            setDeadlines(data)
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.deadline}>
      <View style={styles.innerDeadline} >
        <Text>{dateFormatted.toString()}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <IconButton icon="delete" onPress={deleteDeadline}/>
    </View>
  )
}
const DeadlineList = (props) => {



  const renderItem = (item) => {
    return <Deadline
              key={item.id}
              id={item.id}
              date={item.date}
              title={item.title}
              status={item.status}
              collegeId={props.collegeId}
              setDeadlines={props.setDeadlines}
            />
  }
  return (
    <View >
      {props.deadlines.map(renderItem)}
    </View>

  )
}
export default DeadlineList;

const styles = StyleSheet.create({
  deadline: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(125, 125, 122, 0.43)',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  innerDeadline: {
    padding: 5,
    paddingLeft: 10,
    borderStyle: 'solid',
    borderLeftWidth: 3,
    borderLeftColor: '#e2b1f8'
  },
  title: {
    fontWeight: 'bold'
  }
})
