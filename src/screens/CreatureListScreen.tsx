import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { Cardcreature } from '../components/CardCreature';
import { useCreature } from '../hooks/useCreature';

export const CreatureListScreen = () => {

    const { creatureList } = useCreature();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={creatureList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Cardcreature creatures={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Creatures
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}