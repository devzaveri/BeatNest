import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/AppStack/HomeScreen/HomeScreen';
import { rh, rw } from 'react-native-full-responsive';
import Color from '../../helper/Color';
const Tab = createBottomTabNavigator();
const AppTabBAr = () => {
  return (
  <Tab.Navigator  screenOptions={{headerShown: false , tabBarStyle:{
    position: 'absolute', 
    bottom: rh(4),
    width: rw(80),
    height: rh(8),
    backgroundColor: Color.MainApp,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowOpacity:  0.25,
    shadowRadius: 18.97,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 20,
    alignItems: 'center',
    right: rw(10),
    left: rw(10),
    borderColor: Color.MainApp,
    shadowColor: Color.Orange,
  }}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
  )
}

export default AppTabBAr