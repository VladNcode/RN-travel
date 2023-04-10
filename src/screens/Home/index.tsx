import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

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

  useEffect(() => {
    setAttractions(
      selectedCategory === 'All'
        ? attractionsJson
        : attractionsJson.filter(attractions => attractions.categories.includes(selectedCategory)),
    );
  }, [selectedCategory]);

  const changeSelectedCategory = (item: Category) => {
    setSelectedCategory(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={attractions}
        ListHeaderComponent={() => (
          <>
            <View style={{ marginHorizontal: 32 }}>
              <Title text="Where do" extraTextStyle={styles.mainTitle} />
              <Title text="you want to go?" />
              <Title text="Explore attractions" extraTextStyle={styles.subtitle} />
            </View>
            <Categories
              categories={CATEGORIES_ENUM}
              selectedCategory={selectedCategory}
              changeSelectedCategory={changeSelectedCategory}
            />
          </>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No items found!</Text>}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: attraction, index }) => (
          <AttractionCard
            key={attraction.id}
            imageSrc={attraction.images[0]}
            title={attraction.name}
            subtitle={attraction.city}
            style={index % 2 === 0 && styles.evenCardsMargin}
          />
        )}
      />
    </SafeAreaView>
  );
});
