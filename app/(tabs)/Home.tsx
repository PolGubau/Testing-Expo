import { StyleSheet } from 'react-native';

 import {  View } from '../../components/Themed';
import { Stack } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <Stack>
       <View style={styles.box} />
          </Stack>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
 
});
