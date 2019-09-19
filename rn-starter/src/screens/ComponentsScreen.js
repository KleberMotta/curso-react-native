import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'kleber';

  return (
    <View>
      <Text style={styles.textStyle}>This is some components screen</Text>
      <Text style={styles.subHeaderStyle}> meu nome é {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
