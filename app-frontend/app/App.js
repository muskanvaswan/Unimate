import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/Screens/Dashboard';
import Landing from './src/Screens/Landing';
import Profile from './src/Screens/Profile';
import Topbar from './src/TopBar';
import YourColleges from './src/Screens/YourColleges';
import Account from './src/Screens/Account';
import axios from 'axios';

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
    danger: '#E7694D',
    highlight: '#e2b1f8'
  },
};

function HomeScreen({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <Dashboard />
    </PaperProvider>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {

  React.useEffect(() => {
    axios.defaults.baseURL = `http://127.0.0.1:8000/api`;
    axios.defaults.timeout = 1500;
  })
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Landing"
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
          component={Dashboard}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
        />
        <Drawer.Screen
          name="YourColleges"
          component={YourColleges}
        />
        <Drawer.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
