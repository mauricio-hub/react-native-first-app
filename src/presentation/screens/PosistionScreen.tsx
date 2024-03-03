import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const PosistionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  height: 150,
    // width: 150,
    backgroundColor: '#89d7b0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative',
    top: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#ffaf38',
    borderWidth: 10,
    borderColor: 'white',
    top: 0,
    left: 0,
  },
});
