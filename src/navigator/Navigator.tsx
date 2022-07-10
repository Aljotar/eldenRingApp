import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ClassData } from '../interface/classInterfaces';
import { ClassScreen } from '../screens/ClassScreen';
import { ClassListScreen } from '../screens/ClassListScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { BossesSreen } from '../screens/BossesScreen';
import { BossData } from '../interface/bossInterface';
import { BossListScreen } from '../screens/BossListScreen';
import { CreatureListScreen } from '../screens/CreatureListScreen';
import { CreatureScreen } from '../screens/CreatureScreen';
import { CreatureData } from '../interface/creatureInterface';
import { NpcListScreen } from '../screens/NpcListScreen';
import { NpcScreen } from '../screens/NpcScreen';
import { NpcData } from '../interface/npcInterface';
import { ArmorScreen } from '../screens/ArmorScreen';
import { ArmorData } from '../interface/armorInterface';
import { ArmorListScreen } from '../screens/ArmorListScreen';
import { WeaponScreen } from '../screens/WeaponScreen';
import { WeaponData } from '../interface/weaponInterface';
import { WeaponListScreen } from '../screens/WeaponListScreen';
import { ShieldScreen } from '../screens/ShieldScreen';
import { ShieldData } from '../interface/shieldInterface';
import { ShieldListScreen } from '../screens/ShieldListScreen';
import { ItemScreen } from '../screens/ItemScreen';
import { ItemData } from '../interface/itemsInterface';
import { ItemListScreen } from '../screens/ItemListScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  ClassScreen: { ClassData: ClassData },
  BossesSreen: { BossData: BossData },
  CreatureScreen: { CreatureData: CreatureData },
  NpcScreen: { NpcData: NpcData} ,
  ArmorScreen: { ArmorData: ArmorData},
  WeaponScreen: { WeaponData: WeaponData}
  ShieldScreen: { ShieldData: ShieldData }
  ItemScreen: { ItemData: ItemData }
  ClassListScreen: undefined,
  BossListScreen: undefined,
  CreatureListScreen: undefined,
  NpcListScreen: undefined,
  ArmorListScreen: undefined,
  WeaponListScreen: undefined,
  ShieldListScreen: undefined,
  ItemListScreen: undefined

  
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
        <Stack.Screen name="BossListScreen" component={BossListScreen} />
        <Stack.Screen name="CreatureListScreen" component={CreatureListScreen} />
        <Stack.Screen name="NpcListScreen" component={NpcListScreen} />
        <Stack.Screen name="ArmorListScreen" component={ArmorListScreen} />
        <Stack.Screen name="WeaponListScreen" component={WeaponListScreen} />
        <Stack.Screen name="ShieldListScreen" component={ShieldListScreen} />
        <Stack.Screen name="ItemListScreen" component={ItemListScreen} />

        <Stack.Screen name="ClassScreen" component={ClassScreen} />
        <Stack.Screen name="BossesSreen" component={BossesSreen} />
        <Stack.Screen name="CreatureScreen" component={CreatureScreen} />
        <Stack.Screen name="NpcScreen" component={NpcScreen} />
        <Stack.Screen name="ArmorScreen" component={ArmorScreen} />
        <Stack.Screen name="WeaponScreen" component={WeaponScreen} />
        <Stack.Screen name="ShieldScreen" component={ShieldScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />

      </Stack.Navigator>

  );
}