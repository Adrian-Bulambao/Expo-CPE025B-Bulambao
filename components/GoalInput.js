import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function goalInputHandler(enteredValue) {
    setEnteredText(enteredValue);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText('');
    setModalVisible(false);
  }

  return (
    <View>
      <Pressable
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Add New Goal</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Your course goal"
              onChangeText={goalInputHandler}
              value={enteredText}
            />
            <Pressable style={styles.pressableButton} onPress={addGoalHandler}>
              <Text style={styles.buttonText}>Add Goal</Text>
            </Pressable>
            <Pressable style={styles.pressableButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: '#3f7579',
    padding: 12,
    margin: 16,
    borderRadius: 6,
  },
  pressableButton: {
    backgroundColor: '#3f7579',
    padding: 12,
    marginTop: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    padding: 12,
    width: '100%',
  },
});