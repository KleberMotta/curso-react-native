import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1:', age: 20 },
    { name: 'Friend #2:', age: 21 },
    { name: 'Friend #3:', age: 22 },
    { name: 'Friend #4:', age: 23 },
    { name: 'Friend #5:', age: 24 },
    { name: 'Friend #6:', age: 27 },
    { name: 'Friend #7:', age: 28 },
    { name: 'Friend #8:', age: 30 },
    { name: 'Friend #9:', age: 50 }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {' '}
            My friend {item.name} has an age - {item.age}{' '}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ListScreen;
