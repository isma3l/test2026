/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/RootNavigation';
import { AppStatusBar } from './src/components/AppStatusbar';

function App() {
  return (
    <SafeAreaProvider>
      <AppStatusBar />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
