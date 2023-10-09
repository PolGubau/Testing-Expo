import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { ColorBox } from '../../components';
import { FlatList } from 'react-native-gesture-handler';

const colors = [
  {
    hexCode: '#2aa198',
    colorName: 'Cyan',
  },
  {
    hexCode: '#268bd2',
    colorName: 'Blue',
  },
  {
    hexCode: '#859900',
    colorName: 'Green',
  },
  {
    hexCode: '#b58900',
    colorName: 'Yellow',
  },
  {
    hexCode: '#cb4b16',
    colorName: 'Orange',
  },
  {
    hexCode: '#dc322f',
    colorName: 'Red',
  },
  {
    hexCode: '#d33682',
    colorName: 'Magenta',
  },
  {
    hexCode: '#6c71c4',
    colorName: 'Purple',
  },
  {
    hexCode: '#657b83',
    colorName: 'Gray',
  },
  {
    hexCode: '#fdf6e3',
    colorName: 'White',
  },
  {
    hexCode: '#002b36',
    colorName: 'Black',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ padding: 20 }}
        data={colors}
        keyExtractor={item => item.colorName}
        ListEmptyComponent={<Text>No colors to display</Text>}
        ListHeaderComponent={<Text>Here are some boxes of different colours</Text>}
        ListHeaderComponentStyle={styles.heading}
        renderItem={color => (
          <ColorBox colorName={color.item.colorName} hexCode={color.item.hexCode} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
