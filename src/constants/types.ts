export type Category = 'All' | 'Popular' | 'Recommended' | 'Most Viewed' | 'Most Visited' | 'Historical';

export interface AttractionData {
  id: number;
  name: string;
  city: string;
  country: string;
  entry_price: string;
  address: string;
  opening_time: string;
  closing_time: string;
  categories: string[];
  images: string[];
  coordinates: {
    lat: number;
    lon: number;
  };
}
