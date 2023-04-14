import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { AttractionData } from './types';

export type RootStackParamsList = {
  Home: undefined;
  AttractionDetails: { attraction: AttractionData };
  Gallery: { images: string[] };
  Map: {
    name: string;
    city: string;
    coords: {
      lat: number;
      lon: number;
    };
  };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;

export type AttractionDetailsRoute = RouteProp<RootStackParamsList, 'AttractionDetails'>;
export type AttractionDetailsNavigationProp = StackNavigationProp<RootStackParamsList, 'AttractionDetails'>;

export type GalleryRoute = RouteProp<RootStackParamsList, 'Gallery'>;
export type GalleryNavigationProp = StackNavigationProp<RootStackParamsList, 'Gallery'>;

export type MapRoute = RouteProp<RootStackParamsList, 'Map'>;
export type MapNavigationProp = StackNavigationProp<RootStackParamsList, 'Map'>;
