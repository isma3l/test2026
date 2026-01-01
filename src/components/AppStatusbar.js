import { StatusBar, useColorScheme } from 'react-native';

export const AppStatusBar = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />;
};
