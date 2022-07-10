import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardShield } from '../components/CardShield';
import { useShield } from '../hooks/useShield';

export const ShieldListScreen = () => {

    const { shieldList } = useShield();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={shieldList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardShield shield={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Shields
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
