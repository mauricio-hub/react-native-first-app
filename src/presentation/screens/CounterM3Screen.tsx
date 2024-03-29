import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';
export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>

      {/* <Icon name="accessibility-outline" size={25}/> */}

      <FAB
       // label=''
        style={globalStyles.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        icon="add-outline"
       // icon={() => <Icon name="add" size={25} />}
      />
    </View>
  );
};


