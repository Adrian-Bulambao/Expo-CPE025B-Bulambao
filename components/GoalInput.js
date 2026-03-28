import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');

  function goalInputHandler(enteredValue) {
    setEnteredText(enteredValue);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
        color="#3f7579"
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    padding: 13,
    width: '70%',
  },
});