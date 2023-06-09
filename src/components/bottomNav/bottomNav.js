import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from '../../screens/settiingScreen/setting';
import HomeScreen from '../../screens/signInScreen copy/home';
const Tab = createBottomTabNavigator();

export default function MyTabsNav() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
      name="Home"
      component={HomeScreen} />

      <Tab.Screen
      name="Settings"
      component={SettingScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}