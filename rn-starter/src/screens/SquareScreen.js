import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 } (howTochangeStateObject)

  switch (action.type) {
    case 'change_red':
      // never going to do: satate.red = state.red + 15
      return state.change_red + action.payload > 255 || state.change_red + action.payload < 0
        ? state
        : { ...state, change_red: state.change_red + action.payload };
    case 'change_green':
      return state.change_green + action.payload > 255 || state.change_green + action.payload < 0
        ? state
        : { ...state, change_green: state.change_green + action.payload };
    case 'change_blue':
      return state.change_blue + action.payload > 255 || state.change_blue + action.payload < 0
        ? state
        : { ...state, change_blue: state.change_blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { change_red: 0, change_green: 0, change_blue: 0 }); //dispatch == runMyReducer
  const { change_red, change_green, change_blue } = state;
  console.log(state);

  return (
    <View>
      <ColorCounter
        // onIncrease={() => setColor('red', COLOR_INCREMENT)}
        // onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        // onIncrease={() => setColor('green', COLOR_INCREMENT)}
        // onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <ColorCounter
        // onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        // onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${change_red}, ${change_green},${change_blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
