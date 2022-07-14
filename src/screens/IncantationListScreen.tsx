import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardIncantation } from '../components/CardIncantation';
import { useIncantation } from '../hooks/useIncantation';

export const IncantationListScreen = () => {

    const { incantationList } = useIncantation();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={incantationList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                       <CardIncantation incantation={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Incantations
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
