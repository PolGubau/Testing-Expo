import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  colorName: string;
  hexCode: string;
}
const ColorBox = ({ colorName, hexCode }: Props) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.text, textColor]}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ColorBox;
