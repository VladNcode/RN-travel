import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';
import { AttractionDetailsRoute, AttractionDetailsNavigationProp } from '../../constants/navigation.types';

interface AttractionDetailsProps {
  route: AttractionDetailsRoute;
  navigation: AttractionDetailsNavigationProp;
}

export const AttractionDetails = React.memo(({ navigation, route }: AttractionDetailsProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={() => {
          navigation.goBack();
        }}
        style={{ margin: 32 }}>
        Back
      </Text>
      <Text>{route.params.attraction.name}</Text>
    </SafeAreaView>
  );
});
