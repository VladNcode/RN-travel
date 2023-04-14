import React from 'react';
import { Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapNavigationProp, MapRoute } from '../../constants/navigation.types';
import { styles } from './styles';

interface AttractionDetailsProps {
  route: MapRoute;
  navigation: MapNavigationProp;
}

export const Map = React.memo(({ navigation, route }: AttractionDetailsProps) => {
  const { coords, name, city } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: coords.lat,
          longitude: coords.lon,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          pinColor="tomato"
          coordinate={{
            latitude: coords.lat,
            longitude: coords.lon,
          }}
        />
      </MapView>
      <View style={styles.overlay}>
        <TouchableOpacity onPress={goBack}>
          <Image style={styles.backArrow} source={require('../../assets/backArrow.png')} />
        </TouchableOpacity>
        <Text style={styles.overlayText}>
          {name}, {city}
        </Text>
      </View>
    </View>
  );
});
