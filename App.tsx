import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './pages/Login'
import Home from './pages/Home';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Drawer.Navigator
      drawerType={'front'}
      edgeWidth={150}
    >
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='Home2' component={Home}/>
    </Drawer.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MainApp' component={MainApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

