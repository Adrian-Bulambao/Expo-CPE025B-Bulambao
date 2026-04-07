import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Modal, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalToDelete, setGoalToDelete] = useState(null); // stores key of goal tapped
  const [showWarningModal, setShowWarningModal] = useState(false); // Step 2: warning modal

  // Add a new goal
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => {
      const updatedGoals = [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ];
      if (updatedGoals.length > 5) {
        setShowWarningModal(true); // trigger warning if >5 goals
      }
      return updatedGoals;
    });
  }

  // Delete goal logic
  function confirmDeleteGoal(id) {
    setGoalToDelete(id);
  }

  function deleteGoalHandler() {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== goalToDelete)
    );
    setGoalToDelete(null);
  }

  function cancelDelete() {
    setGoalToDelete(null);
  }

  // Step 1: User icon click shows welcome pop-up
  function handleUserIconPress() {
    Alert.alert('Welcome!', 'Welcome to the Goal List Application');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>My Goals</Text>
        <Pressable onPress={handleUserIconPress}>
          <MaterialIcons name="account-circle" size={30} color="#3f7579" />
        </Pressable>
      </View>

      <GoalInput onAddGoal={addGoalHandler} />
      <GoalList
        goals={courseGoals}
        onPressGoal={(id) => confirmDeleteGoal(id)}
      />

      {/* Step 3: Delete confirmation modal */}
      <Modal
        visible={goalToDelete !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={{ fontSize: 16, marginBottom: 12 }}>
              Are you sure you want to delete this goal?
            </Text>
            <Pressable style={styles.modalButton} onPress={deleteGoalHandler}>
              <Text style={styles.buttonText}>Yes, Delete</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={cancelDelete}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Step 2: Warning modal for more than 5 goals */}
      <Modal
        visible={showWarningModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowWarningModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={{ fontSize: 16, marginBottom: 12 }}>
              Warning: You have more than 5 goals! Try not to overwhelm yourself.
            </Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setShowWarningModal(false)}
            >
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
  modalButton: {
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
});