import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

function GoalList({ goals, onPressGoal }) {
  return (
    <View style={styles.goalListContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            text={itemData.item.text}
            onPress={() => onPressGoal(itemData.item.key)}
          />
        )}
      />
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  goalListContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
});