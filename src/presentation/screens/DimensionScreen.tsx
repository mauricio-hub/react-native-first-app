import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {Dimensions} from 'react-native';

//const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {

  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.constainer}>
        <View style={
          {...styles.purpleBox, width: width * 0.6}
        }></View>
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    //width: '100%',
    width: 300,
    backgroundColor: 'red',
    height: 300,
  },
  title: {
    fontSize: 20,
  },
  purpleBox: {
    height: '50%',
    backgroundColor: '#5949ea',
    width: '50%',
  },
});
