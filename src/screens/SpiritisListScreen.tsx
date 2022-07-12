import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardSpirits } from '../components/CardSpirits';
import { useSpirits } from '../hooks/useSpirits';

export const SpiritsListScreen = () => {

    const { spiritsList } = useSpirits();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={spiritsList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardSpirits spirits={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Spiritis
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}