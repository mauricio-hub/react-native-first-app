import React from 'react';
import {Pressable, Text, Platform, StyleSheet} from 'react-native';

interface Props {
  onPress?: () => void;
  onLongPress?: () => void;
  label?: string;
}

export const PrymaryButton = ({
  onPress,
  onLongPress,
  label = 'Incremetar',
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        onPress && onPress();
      }}
      onLongPress={() => {
        onLongPress && onLongPress();
      }}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={{color: Platform.OS === 'android' ? 'white' : 'black'}}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : '#fff200',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#6866b3' : '#d7d27b',
  },
});
