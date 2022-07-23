import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardIncantation } from '../components/CardIncantation';
import { SearchInfo } from '../components/SearchInfo';
import { useIncantation } from '../hooks/useIncantation';
import { IncantationData } from '../interface/incantationsInterface';

export const IncantationListScreen = () => {

    const { incantationList } = useIncantation();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<IncantationData[]>([])

    useEffect(() => {

        if (term.length === 0) {
            return setFilterInfo(incantationList);

        }

        setFilterInfo(
            incantationList.filter(info => info.name.toLocaleLowerCase()
                .includes(term.toLocaleLowerCase()))
        );

    }, [term, incantationList])

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
                        <CardIncantation incantation={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop: 10,
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
