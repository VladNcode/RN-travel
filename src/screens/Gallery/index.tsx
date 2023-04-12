import React from 'react';
import {
  Image,
  ImageBackground,
  ListRenderItemInfo,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { GalleryNavigationProp, GalleryRoute } from '../../constants/navigation.types';
import { styles } from './styles';
import { FlatList } from 'react-native-gesture-handler';

interface GalleryProps {
  route: GalleryRoute;
  navigation: GalleryNavigationProp;
}

export const Gallery = React.memo(({ navigation, route }: GalleryProps) => {
  const { images } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  const renderImages = ({ item, index }: ListRenderItemInfo<string>) => {
    return (
      <ImageBackground key={item} imageStyle={styles.mainImageStyle} style={styles.mainImage} source={{ uri: item }}>
        <View style={styles.header}>
          {index === 0 && (
            <Pressable onPress={goBack} hitSlop={8}>
              <Image style={styles.icon} source={require('../../assets/back.png')} />
            </Pressable>
          )}
        </View>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderImages}
        data={images}
        style={styles.container}
        keyExtractor={item => String(item)}
      />
    </SafeAreaView>
  );
});
