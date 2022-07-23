import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardAmmos } from '../components/CardAmmos';
import { SearchInfo } from '../components/SearchInfo';
import { useAmmos } from '../hooks/useAmmos';
import { AmmosData } from '../interface/ammosInterface';

export const AmmosListScreen = () => {

    const { ammosList } = useAmmos();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<AmmosData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(ammosList);

        }

        setFilterInfo(
            ammosList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,ammosList])

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