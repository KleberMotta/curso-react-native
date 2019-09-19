import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//BOX Oject Screen

const BoxScreen = () => {
  return (
    <View style={styles.viewParentStyle}>
      <View style={styles.textOneStyle}>
        <Text>Child #1</Text>
      </View>
      <View style={styles.textTwoStyle}>
        <Text>Child #2</Text>
      </View>
      <View style={styles.textThreeStyle}>
        <Text>Child #3</Text>
      </View>
    </View>
  );
};

//Flex Box for parents: flexDirection, justifyContent, alignItems
//Flex Box for children: flex, alignSelf

const styles = StyleSheet.create({
  viewParentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textOneStyle: {
    backgroundColor: 'red',
    height: 100,
    width: 100
  },
  textTwoStyle: {
    backgroundColor: 'green',
    alignSelf: 'flex-end',
    height: 100,
    width: 100
  },
  textThreeStyle: {
    backgroundColor: 'purple',
    height: 100,
    width: 100
  }
});

export default BoxScreen;
