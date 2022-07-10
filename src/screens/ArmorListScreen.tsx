import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardArmor } from '../components/CardArmor';
import { useArmor } from '../hooks/useArmor';

export const ArmorListScreen = () => {

    const { armorList } = useArmor();

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={armorList}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardArmor armor={item}/>
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Armors
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}