import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import { router, useNavigation } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create</Text>
      <TouchableOpacity
        onPress={() => {
          router.replace('/login');
        }}>
        <Text>Press Me</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
