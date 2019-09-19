import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  return { ...state, change_counter: state.change_counter + action.payload };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { change_counter: 0 });
  const { change_counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Nao faca isso!
          // counter++;
          dispatch({ type: 'change_counter', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // Nao faca isso!
          // counter--;
          dispatch({ type: 'change_counter', payload: -1 });
        }}
      />
      <Text>Current Screen: {change_counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
