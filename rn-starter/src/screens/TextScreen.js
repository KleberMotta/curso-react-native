import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// ESSE MODELO SERA REPETIDO TODAS AS VEZES QUE TIVERMOS QUE LIDAR COM TEXT INPUTS

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Enter password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be at least 4 characters long </Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1
  }
});

export default TextScreen;
