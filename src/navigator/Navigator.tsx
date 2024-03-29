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
import { AmmosScreen } from '../screens/AmmosScreen';
import { AmmosData } from '../interface/ammosInterface';
import { AmmosListScreen } from '../screens/AmmosListScreen';
import { TalismanScreen } from '../screens/TalismanScreen';
import { TalismanData } from '../interface/talismanInterface';
import { TalismanListScreen } from '../screens/TalismanListScreen';
import { SpiritsScreen } from '../screens/SpiritsScreen';
import { SpiritsData } from '../interface/spiritsInterface';
import { SpiritsListScreen } from '../screens/SpiritisListScreen';
import { AshesListScreen } from '../screens/AshesListScreen';
import { AshesData } from '../interface/ashesInterface';
import { AshesScreen } from '../screens/AshesScreen';
import { IncantationScreen } from '../screens/IncantationScreen';
import { IncantationData } from '../interface/incantationsInterface';
import { IncantationListScreen } from '../screens/IncantationListScreen';
import { SorceriesScreen } from '../screens/SorceriesSceen';
import { SorceriesData } from '../interface/sorceriesInterface';
import { SorceriesListScreen } from '../screens/SorceriesListScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  ClassScreen: { ClassData: ClassData },
  BossesSreen: { BossData: BossData },
  CreatureScreen: { CreatureData: CreatureData },
  NpcScreen: { NpcData: NpcData} ,
  ArmorScreen: { ArmorData: ArmorData},
  WeaponScreen: { WeaponData: WeaponData},
  ShieldScreen: { ShieldData: ShieldData },
  ItemScreen: { ItemData: ItemData },
  AmmosScreen: {  AmmosData: AmmosData },
  TalismanScreen: { TalismanData: TalismanData},
  SpiritsScreen: { SpiritsData: SpiritsData  },
  AshesScreen: {  AshesData : AshesData },
  IncantationScreen: { IncantationData: IncantationData },
  SorceriesScreen: { SorceriesData: SorceriesData },
  ClassListScreen: undefined,
  BossListScreen: undefined,
  CreatureListScreen: undefined,
  NpcListScreen: undefined,
  ArmorListScreen: undefined,
  WeaponListScreen: undefined,
  ShieldListScreen: undefined,
  ItemListScreen: undefined,
  AmmosListScreen: undefined,
  TalismanListScreen: undefined,
  SpiritsListScreen: undefined,
  AshesListScreen: undefined,
  IncantationListScreen: undefined,
  SorceriesListScreen: undefined


  
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
        <Stack.Screen name="AmmosListScreen" component={AmmosListScreen} />
        <Stack.Screen name="TalismanListScreen" component={TalismanListScreen} />
        <Stack.Screen name="SpiritsListScreen" component={SpiritsListScreen} />
        <Stack.Screen name="AshesListScreen" component={AshesListScreen} />
        <Stack.Screen name="IncantationListScreen" component={IncantationListScreen} />
        <Stack.Screen name="SorceriesListScreen" component={SorceriesListScreen} />

        <Stack.Screen name="ClassScreen" component={ClassScreen} />
        <Stack.Screen name="BossesSreen" component={BossesSreen} />
        <Stack.Screen name="CreatureScreen" component={CreatureScreen} />
        <Stack.Screen name="NpcScreen" component={NpcScreen} />
        <Stack.Screen name="ArmorScreen" component={ArmorScreen} />
        <Stack.Screen name="WeaponScreen" component={WeaponScreen} />
        <Stack.Screen name="ShieldScreen" component={ShieldScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="AmmosScreen" component={AmmosScreen} />
        <Stack.Screen name="TalismanScreen" component={TalismanScreen} />
        <Stack.Screen name="SpiritsScreen" component={SpiritsScreen} />
        <Stack.Screen name="AshesScreen" component={AshesScreen} />
        <Stack.Screen name="IncantationScreen" component={IncantationScreen} />
        <Stack.Screen name="SorceriesScreen" component={SorceriesScreen} />

      </Stack.Navigator>

  );
}