import React from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';

import { Category } from '../../constants/types';
import { styles } from './styles';

interface CategoryProps {
  categories: Category[];
  selectedCategory: Category;
  changeSelectedCategory: (item: Category) => void;
}

export const Categories = React.memo(({ categories, selectedCategory, changeSelectedCategory }: CategoryProps) => {
  const renderCategoriesRow = ({ item, index }: ListRenderItemInfo<Category>) => {
    const isSelected = selectedCategory === item;

    return (
      <TouchableOpacity
        onPress={() => {
          changeSelectedCategory(item);
        }}
        style={styles.categoryContainerWrapper}>
        <View
          style={[
            styles.categoryContainer,
            isSelected && styles.selectedCategoryContainer,
            index === 0 && styles.firstItem,
          ]}>
          <Text style={[styles.categoryItem, isSelected && styles.selectedCategoryItem]}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={categories}
      renderItem={renderCategoriesRow}
    />
  );
});
