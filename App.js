import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RouteStack from './src/Route/RouteStack';
import SplaceScreen from './src/components/SplaceScreen/SplaceScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isSplace, setIsSplace] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSplace(false); // Change this to false after 2 seconds
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout); // Clean up timeout
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSplace ? (
          <Stack.Screen name="Splace" component={SplaceScreen} />
        ) : (
          <Stack.Screen name="MainApps" component={RouteStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
