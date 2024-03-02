import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.constainer}>
      {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}

      <View style={styles.purpleBox}>
        <Text style={styles.title2}>Hola Inmundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    borderWidth: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: '#9856d6',
    margin: 20,
  },
    title2: {
        fontSize: 20,
        color: 'white',
        
    },
});
