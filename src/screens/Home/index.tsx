import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Title } from '../../components/Title';
import { styles } from './styles';

export const Home = React.memo(() => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" extraTextStyle={styles.mainTitle} />
        <Title text="you want to go?" />
        <Title text="Explore attractions" extraTextStyle={styles.subtitle} />
      </View>
    </SafeAreaView>
  );
});
