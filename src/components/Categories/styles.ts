import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 34 - 16,
  },
  categoryContainerWrapper: {
    paddingVertical: 16,
  },
  categoryContainer: {
    marginRight: 17,
  },
  selectedCategoryContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#4681A3',
  },
  categoryItem: {
    fontSize: 12,
    marginBottom: 2,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  selectedCategoryItem: {
    color: '#000000',
    fontWeight: '600',
  },
  firstItem: {
    marginLeft: 32,
  },
});
