import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Products from './products';
import Cart from './cart';
import Favourite from './favourite';
import Settings from './settings';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="List" component={Products} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}