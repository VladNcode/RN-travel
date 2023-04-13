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
    return <Image key={item} style={styles.mainImage} source={{ uri: item }} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          renderItem={renderImages}
          data={images}
          style={styles.container}
          keyExtractor={item => String(item)}
        />
        <TouchableOpacity style={styles.backContainer} onPress={goBack}>
          <Image style={styles.backIcon} source={require('../../assets/back.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});
