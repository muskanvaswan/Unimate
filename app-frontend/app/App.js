import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Topbar from './src/TopBar';

const theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#4694DB',
    accent: 'rgb(163, 222, 169)',
    background: '#1b1b1b',
    success: '#4DE75C',
    waiting: '#E7A94D',
    danger: '#E7694D'
  },
};

function HomeScreen({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"

        screenOptions={{
          drawerInactiveTintColor: '#fff',
          drawerStyle: {
            backgroundColor: '#1b1b1b',
            width: 240,
            color: '#fff'
          },
          header: ({ navigation, route, options }) => {
          //const title = getHeaderTitle(options, route.name);
            return <Topbar navigation={navigation}/>;
          }
        }}>
        <Drawer.Screen
          name="Dashboard"
          component={Home}
        />
        <Drawer.Screen
          name="Profile"
          component={HomeScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
