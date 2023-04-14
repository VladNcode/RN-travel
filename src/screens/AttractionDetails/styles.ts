import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: height / 2.5,
    marginTop: 34,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4681A3',
    textAlign: 'center',
    padding: 25,
  },
  container: {
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainImageStyle: {
    borderRadius: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 34,
    height: 34,
    margin: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginBottom: 16,
  },
  miniImage: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 10,
  },
  moreImages: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    width: 40,
    height: 40,
    top: 4,
    left: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {
    maxWidth: '70%',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 23,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '700',
    marginTop: 48,
  },
  city: {
    marginTop: 16,
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '700',
    marginTop: 40,
  },
  textIcon: {
    width: 42,
    height: 42,
    marginRight: 7,
  },
  text: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
  },
});
