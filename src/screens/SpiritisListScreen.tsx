import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardSpirits } from '../components/CardSpirits';
import { SearchInfo } from '../components/SearchInfo';
import { useSpirits } from '../hooks/useSpirits';
import { SpiritsData } from '../interface/spiritsInterface';

export const SpiritsListScreen = () => {

    const { spiritsList } = useSpirits();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<SpiritsData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(spiritsList);

        }

        setFilterInfo(
            spiritsList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,spiritsList])
    
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
                        <CardSpirits spirits={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop: 10,
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