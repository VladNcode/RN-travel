import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { AttractionCard } from '../../components/AttractionCard';
import { Categories } from '../../components/Categories';
import { Title } from '../../components/Title';
import { CATEGORIES_ENUM } from '../../constants/constants';
import { AttractionData, Category } from '../../constants/types';
import attractionsJson from '../../data/attractions.json';
import { styles } from './styles';

export const Home = React.memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [attractions, setAttractions] = useState<AttractionData[]>([]);

  useEffect(() => {
    setAttractions(attractionsJson);
  }, []);

  const changeSelectedCategory = (item: Category) => {
    setSelectedCategory(item);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" extraTextStyle={styles.mainTitle} />
        <Title text="you want to go?" />
        <Title text="Explore attractions" extraTextStyle={styles.subtitle} />
        <Categories
          categories={CATEGORIES_ENUM}
          selectedCategory={selectedCategory}
          changeSelectedCategory={changeSelectedCategory}
        />
        <ScrollView contentContainerStyle={styles.row}>
          {attractions.map((attraction, i) => (
            <AttractionCard
              key={attraction.id}
              imageSrc={attraction.images[0]}
              title={attraction.name}
              subtitle={attraction.city}
              style={i % 2 === 0 ? styles.evenCardsMargin : {}}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});
