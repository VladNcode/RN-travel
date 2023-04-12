import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: height / 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  mainImageStyle: {
    borderRadius: 20,
  },

  icon: {
    width: 34,
    height: 34,
    margin: 16,
  },
});
