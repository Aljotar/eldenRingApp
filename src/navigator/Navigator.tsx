import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ClassData } from '../interface/classInterfaces';
import { ClassScreen } from '../screens/ClassScreen';
import { ClassListScreen } from '../screens/ClassListScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { BossesSreen } from '../screens/BossesScreen';
import { BossData } from '../interface/bossInterface';
import { BossListScreen } from '../screens/BossListScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  ClassScreen: { ClassData: ClassData },
  ClassListScreen: undefined,
  BossesSreen: { BossData: BossData },
  BossListScreen: undefined
  
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (

      <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#111111'
            }
          }}
          
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClassListScreen" component={ClassListScreen} />
        <Stack.Screen name="ClassScreen" component={ClassScreen} />
        <Stack.Screen name="BossesSreen" component={BossesSreen} />
        <Stack.Screen name="BossListScreen" component={BossListScreen} />
      </Stack.Navigator>

  );
}