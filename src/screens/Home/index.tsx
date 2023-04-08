import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Title } from '../../components/Title';
import { styles } from './styles';

export const Home = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView, styles.flex]}>
      <View style={[styles.view, styles.flex]}>
        <Title />
      </View>
    </SafeAreaView>
  );
};
