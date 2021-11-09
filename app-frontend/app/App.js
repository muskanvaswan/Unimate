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
import College from './src/Screens/College';
import Account from './src/Screens/Account';
import SignUp from './src/Screens/SignUp';
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

function App({ navigation }) {

  return (

    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Dashboard"
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
        >
        {() => <Dashboard stacker={navigation} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Profile"
          component={Profile}
        />
        <Drawer.Screen
          name="YourColleges"
          component={YourColleges}
        />


      </Drawer.Navigator>
    </NavigationContainer>

  );
}

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
  React.useEffect(() => {
    axios.defaults.baseURL = `http://127.0.0.1:8000/api`;
    axios.defaults.timeout = 1500;
  })
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={App}
        options={{
        headerShown: false
        }}
      />
      <Stack.Screen
        name="College"
        component={College}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          }
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>

  );
}

AppRegistry.registerComponent(appName, () => Main);
