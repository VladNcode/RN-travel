import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Categories } from '../../components/Categories';
import { Title } from '../../components/Title';
import { CATEGORIES_ENUM } from '../../constants/constants';
import { styles } from './styles';
import { Category } from '../../constants/types';

export const Home = React.memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

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
      </View>
    </SafeAreaView>
  );
});
