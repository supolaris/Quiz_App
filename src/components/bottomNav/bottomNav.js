import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from '../../screens/settiingScreen/setting';
import HomeScreen from '../../screens/homeScreen/home';
import HomeIcon from "react-native-vector-icons/AntDesign";
import SettingIcon from "react-native-vector-icons/AntDesign"

const Tab = createBottomTabNavigator();

export default function MyTabsNav() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
             height: 60,
            paddingHorizontal: 15,
            backgroundColor: '#FFC3A0'

          },
          }}
    
    >
      <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <HomeIcon
              name={'home'}
              size={focused ? 25 : 25}
              style={{color: focused ? 'white' : 'gray', backgroundColor: focused ? '#ca2324' : "white",  borderRadius: focused ? 100 : 1000,  padding: focused ? 8 : 8}}
            />
          </View>
          ),
          
        }}
      />
      <Tab.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <SettingIcon
              name={'setting'}
              size={focused ? 25 : 25}
              style={{color: focused ? 'white' : 'gray', backgroundColor: focused ? '#ca2324' : "white",  borderRadius: focused ? 100 : 1000,  padding: focused ? 8 : 8}}
            />
          </View>
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}