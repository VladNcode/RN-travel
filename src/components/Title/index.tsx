import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface TitleProps {
  text?: string;
}

export const Title = ({ text = 'Default text' }: TitleProps) => {
  return <Text style={styles.title}>{text}</Text>;
};
