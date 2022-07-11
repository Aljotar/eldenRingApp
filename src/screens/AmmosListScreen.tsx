import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardAmmos } from '../components/CardAmmos';
import { useAmmos } from '../hooks/useAmmos';

export const AmmosListScreen = () => {

    const { ammosList } = useAmmos();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={ammosList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardAmmos ammos={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop: 10,
                            color: 'white'

                        }}>
                            Ammos
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}