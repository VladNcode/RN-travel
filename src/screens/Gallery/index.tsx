import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

export const Gallery = React.memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Gallery</Text>
    </SafeAreaView>
  );
});
