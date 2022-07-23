import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardBoss } from '../components/CardBoss';
import { SearchInfo } from '../components/SearchInfo';
import { useBoss } from '../hooks/useBoss';
import { BossData } from '../interface/bossInterface';

export const BossListScreen = () => {

    const { bossList } = useBoss();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<BossData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(bossList);

        }

        setFilterInfo(
            bossList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,bossList])

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
                        <CardBoss bosses={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop: 10,
                            color: 'white'

                        }}>
                            Bosses
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
