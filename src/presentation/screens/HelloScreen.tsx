import {View, Text, StyleSheet} from 'react-native';

interface Props {
  name?: string;
}

export const HelloScreen = ({name = 'Wolrd'}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="head">
        Hello {name}
      </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
});
