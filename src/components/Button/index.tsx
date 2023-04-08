import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const MyButton = ({ setValue }: { setValue: React.Dispatch<React.SetStateAction<number>> }) => {
  const onPress = () => {
    setValue(v => v + 1);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Press me!</Text>
    </TouchableOpacity>
  );
};
