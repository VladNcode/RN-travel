import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  overlay: {
    backgroundColor: '#FFFFFF',
    width: width - 40,
    height: '8%',
    position: 'absolute',
    top: 50,
    left: 20,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlayText: {
    marginLeft: 34,
    fontSize: 20,
    fontWeight: '500',
  },
  backArrow: {
    marginLeft: 28,
    width: 41,
    height: 41,
  },
});
