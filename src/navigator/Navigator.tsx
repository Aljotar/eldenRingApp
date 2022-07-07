import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ClassData } from '../interface/classInterfaces';
import { ClassScreen } from '../screens/ClassScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  ClassScreen: { ClassData: ClassData }
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (

      <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: 'white'
            }
          }}
          
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClassScreen" component={ClassScreen} />
      </Stack.Navigator>

  );
}