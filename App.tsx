import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './pages/Login'
import Home from './pages/Home';
import ReparationGuides from './pages/ReparationGuides';
import ReparationServices from './pages/ReparationServices';
import SearchProduct from './pages/SearchProduct';
import ScanProduct from './pages/ScanProduct';
import ViewProduct from './pages/ViewProduct';


const LoginStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const ProductSearchStack = createStackNavigator()

const ProductSearchScan = () => {
  return (
    <ProductSearchStack.Navigator 
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle:{
          backgroundColor: "#0d47a1"
        }
      }}
    >
      <ProductSearchStack.Screen name='Home' component={Home} options={{headerShown: false}} />
      <ProductSearchStack.Screen name='SearchProduct' component={SearchProduct} options={{title: 'Rechercher un produit'}}/>
      <ProductSearchStack.Screen name='ScanProduct' component={ScanProduct} options={{title: 'Scanner un produit'}}/>
      <ProductSearchStack.Screen name='ViewProduct' component={ViewProduct} options={{title: 'Evaluation'}}/>
    </ProductSearchStack.Navigator>
  )
}

const MainApp = () => {
  return (
    <Drawer.Navigator
      drawerType={'front'}
      edgeWidth={150}
    >
      <Drawer.Screen name='ProductSearchScan' component={ProductSearchScan} options={{title: 'Chercher ou scanner un produit'}}/>
      <Drawer.Screen name='ReparationGuides' component={ReparationGuides} options={{title: 'Guides de réparation'}}/>
      <Drawer.Screen name='ReparationServices' component={ReparationServices} options={{title: 'Services de réparation'}}/>
    </Drawer.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{headerShown: false}}
      >
        <LoginStack.Screen name='Login' component={Login} />
        <LoginStack.Screen name='MainApp' component={MainApp}/>
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default App

