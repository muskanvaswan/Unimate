import * as React from 'react';
import { Button, IconButton, TextInput, useTheme, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import axios from '../shared/api';

const MyComponent = (props) => {

  const { colors } = useTheme();

  const [ title, setTitle ] = React.useState('')
  const [ open, setOpen ] = React.useState(false)
  const [ date, setDate ] = React.useState(new Date())

  const createDeadline = () => {
    if (title != '') {
      const payload = {
        date: date,
        title: title
       }
      axios
        .post(`deadline/${props.collegeId}/`, payload)
        .then(response => {
          props.setVisible(false);
        })
        .catch(error => console.log(error));
    }

  }
  return (
    <View style={[styles.container, {backgroundColor: colors.background,}]}>
      <Text style={styles.heading}>Add a deadline</Text>
      <Button
        icon="calendar"
        onPress={() => setOpen(true)}
        mode="outlined"
        color={colors.highlight}
        >
        Set Deadline End Date
      </Button>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput
          value={title}
          style={styles.input}
          mode="outlined"
          onChangeText={title => setTitle(title)}
          outlineColor={colors.highlight}
        />
        <IconButton
          icon="check"
          color={colors.accent}
          size={30}
          mode="contained"
          onPress={createDeadline}
        />
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        minimumDate={new Date()}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

    </View>
  )
};

export default MyComponent

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,

    position: 'absolute',
    top: '60%',
    width: '100%',
    zIndex: 2,
  },
  input: {
    width: '85%',
    height: 40,
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(128, 126, 126, 0.03)'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  }

});
