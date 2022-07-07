import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ClassScreen } from '../screens/ClassScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (

      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClassScreen" component={ClassScreen} />
      </Stack.Navigator>

  );
}