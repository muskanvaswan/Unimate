import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Home from './src/Home';

const theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(117, 181, 247)',
    accent: 'rgb(163, 222, 169)',
    background: '#1b1b1b',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
