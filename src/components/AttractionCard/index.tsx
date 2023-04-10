import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

interface AttractionCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  style: any;
}

export const AttractionCard = React.memo(({ imageSrc, title, subtitle, style }: AttractionCardProps) => {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={{ uri: imageSrc }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image style={styles.icon} source={require('../../assets/location.png')} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
});
