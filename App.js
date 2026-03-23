import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // Updates the text input state
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Adds the entered goal to the courseGoals array
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText
    ]);
    setEnteredGoalText(''); // Clear input after adding
  }

  return (
    <View style={styles.appContainer}>
      {/* Input Row */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button
          title="ADD GOAL"
          onPress={addGoalHandler}
        />
      </View>

      {/* List of Goals */}
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <Text key={index} style={styles.goalItem}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
    marginRight: 8,
    flex: 0,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
});