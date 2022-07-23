import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardAshes } from '../components/CardAshes';
import { SearchInfo } from '../components/SearchInfo';
import { useAshes } from '../hooks/useAshes';
import { AshesData } from '../interface/ashesInterface';

export const AshesListScreen = () => {

    const { ashesList } = useAshes();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<AshesData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(ashesList);

        }

        setFilterInfo(
            ashesList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,ashesList])

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
                        <CardAshes ashes={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop: 10,
                            color: 'white'

                        }}>
                            Ashes
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}