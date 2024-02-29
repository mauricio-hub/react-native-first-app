import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>

      <FAB
        label='+1'
        style={globalStyles.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};

