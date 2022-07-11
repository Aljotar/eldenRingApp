import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardNpc } from '../components/CardNpc';
import { CardTalisman } from '../components/CardTalisman';
import { useNpc } from '../hooks/useNpc';
import { useTalisman } from '../hooks/useTalisman';

export const TalismanListScreen = () => {

    const { talismanList } = useTalisman();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={talismanList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardTalisman talisman={item}/>
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Talismans
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
