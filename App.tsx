import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PressableOpacity } from '@/components/PressableOpacity/PressableOpacity';

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View
        aria-live='polite'
        style={styles.countContainer}>
        <Text>Contador: {count}</Text>
      </View>
      <PressableOpacity
        role='button'
        accessibilityHint='Adiciona mais 1 ao contador'
        style={styles.button}
        onPress={onPress}>
        <Text>+ 1</Text>
      </PressableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    minHeight: 48,
    padding: 16,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
