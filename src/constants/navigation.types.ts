import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { AttractionData } from './types';

export type RootStackParamsList = {
  Home: undefined;
  AttractionDetails: { attraction: AttractionData };
  Gallery: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;

export type AttractionDetailsRoute = RouteProp<RootStackParamsList, 'AttractionDetails'>;
export type AttractionDetailsNavigationProp = StackNavigationProp<RootStackParamsList, 'AttractionDetails'>;
