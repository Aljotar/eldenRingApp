import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { Cardcreature } from '../components/CardCreature';
import { SearchInfo } from '../components/SearchInfo';
import { useCreature } from '../hooks/useCreature';
import { CreatureData } from '../interface/creatureInterface';
import { styles } from '../theme/appTheme';

export const CreatureListScreen = () => {

    const { creatureList } = useCreature();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<CreatureData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(creatureList);

        }

        setFilterInfo(
            creatureList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,creatureList])

    return (
        <ScrollView>

            <SearchInfo
                onDebounce={(value) => setTerm(value)}
            />
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={filterInfo}
                    keyExtractor={(clase) => clase.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Cardcreature creatures={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={styles.listName}>
                            Creatures
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}