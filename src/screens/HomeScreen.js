import { StyleSheet, Text } from 'react-native';
import { Screen } from '../components/Screen';

export function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <Text>Holaaaa</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
