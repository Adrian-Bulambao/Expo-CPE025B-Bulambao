import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

function GoalItem({ text, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.goalItem, pressed && styles.pressed]}
    >
      <Text>{text}</Text>
    </Pressable>
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
  },
  pressed: {
    backgroundColor: '#ddd',
  },
});