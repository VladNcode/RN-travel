import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Title } from '../../components/Title';
import { MyButton } from '../../components/Button';
import { styles } from './styles';

export const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={[styles.safeAreaView, styles.flex]}>
      <View style={[styles.view, styles.flex]}>
        <Title text={value + ''} />
        <View style={styles.buttonContainer}>
          <MyButton setValue={setValue} />
        </View>
      </View>
    </SafeAreaView>
  );
};
