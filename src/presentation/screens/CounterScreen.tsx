import React, { useState } from 'react';
import {Button, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(0);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      <Pressable  onPress={() => {
            setCounter(counter + 1);
      }} 
      onLongPress={() => {
        setCounter(0);

      }}
        style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
        ]}
      >
        <Text    style={{color: Platform.OS === 'android' ? 'white' : 'black'}}>Incremetar</Text>
       </Pressable> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },

    button: {
        backgroundColor: Platform.OS === "android" ? '#5856D6' : '#fff200',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: Platform.OS === "android" ? '#6866b3' : '#d7d27b',
    }
});
