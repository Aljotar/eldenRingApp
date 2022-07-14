import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardSorceries } from '../components/CardSorceries';
import { useSorceries } from '../hooks/useSorceries';

export const SorceriesListScreen = () => {

    const { sorceriesList } = useSorceries();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={sorceriesList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                       <CardSorceries sorceries={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Sorciries
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}