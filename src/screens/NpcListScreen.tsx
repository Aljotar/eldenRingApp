import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardNpc } from '../components/CardNpc';
import { useNpc } from '../hooks/useNpc';

export const NpcListScreen = () => {

    const { npcList } = useNpc();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={npcList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardNpc npc={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Npc
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
