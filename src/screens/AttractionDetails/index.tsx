import React from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { AttractionDetailsNavigationProp, AttractionDetailsRoute } from '../../constants/navigation.types';
import { styles } from './styles';

interface AttractionDetailsProps {
  route: AttractionDetailsRoute;
  navigation: AttractionDetailsNavigationProp;
}

export const AttractionDetails = React.memo(({ navigation, route }: AttractionDetailsProps) => {
  const { attraction } = route.params;
  const mainImageUrl = attraction.images[0];

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground imageStyle={styles.mainImageStyle} style={styles.mainImage} source={{ uri: mainImageUrl }}>
        <View style={styles.header}>
          <Pressable onPress={goBack} hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/back.png')} />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image style={styles.icon} source={require('../../assets/share.png')} />
          </Pressable>
        </View>

        <View style={styles.footer}>
          {attraction.images.map(imageUrl => {
            return <Image key={imageUrl} source={{ uri: imageUrl }} style={styles.miniImage} />;
          })}
        </View>
      </ImageBackground>
      <Text>{attraction.name}</Text>
    </SafeAreaView>
  );
});
