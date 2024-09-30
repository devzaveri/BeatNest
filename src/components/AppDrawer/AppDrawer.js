import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/AppStack/HomeScreen/HomeScreen';
import AppTabBAr from '../AppTabBAr/AppTabBAr';
const stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
function HomeScreenFunc(){
    return(
        <stack.Navigator>
            <stack.Screen name='Homes' component={HomeScreen} options={{headerShown: false}} />
        </stack.Navigator>
    )
    
}

const AppDrawer = () => {
console.log("----");

  return (
    <View style={{flex: 1 , backgroundColor: '#000'}}>
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Drawer.Screen name="Homes" component={AppTabBAr} />
  </Drawer.Navigator>
  </View>
  )
}

export default AppDrawer