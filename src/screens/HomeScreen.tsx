import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardClass } from '../components/CardClass';
import { useClass } from '../hooks/useClass'

export const HomeScreen = () => {

    const { classList } = useClass();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={classList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardClass clases={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginTop: 50

                        }}>
                            Class
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
