// GoalItem.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
});