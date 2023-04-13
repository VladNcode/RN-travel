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
  const imageOverflow = attraction.images.length - 4;
  const slicedImages = attraction.images.slice(0, 5);

  const goBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', { images: attraction.images });
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

        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImages.map((imageUrl, index) => {
            return (
              <View key={imageUrl}>
                <Image key={imageUrl} source={{ uri: imageUrl }} style={styles.miniImage} />
                {imageOverflow > 0 && index === slicedImages.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>+{imageOverflow}</Text>
                  </View>
                ) : null}
              </View>
            );
          })}
        </Pressable>
      </ImageBackground>

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.name}>{attraction.name}</Text>
          <Text style={styles.city}>{attraction.city}</Text>
        </View>
        <Text style={styles.price}>{attraction.entry_price}</Text>
      </View>

      <View style={styles.iconTextContainer}>
        <Image style={styles.textIcon} source={require('../../assets/place.png')} />
        <Text style={styles.text}>{attraction.address}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Image style={styles.textIcon} source={require('../../assets/hours.png')} />
        <Text style={styles.text}>{`Open: 
${attraction.opening_time} - ${attraction.closing_time}`}</Text>
      </View>
    </SafeAreaView>
  );
});
