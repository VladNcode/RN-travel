import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '50%',
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold' as const,
  },
});
