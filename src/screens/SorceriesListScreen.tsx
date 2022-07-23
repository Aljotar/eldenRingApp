import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardSorceries } from '../components/CardSorceries';
import { SearchInfo } from '../components/SearchInfo';
import { useSorceries } from '../hooks/useSorceries';
import { SorceriesData } from '../interface/sorceriesInterface';
import { styles } from '../theme/appTheme';

export const SorceriesListScreen = () => {

    const { sorceriesList } = useSorceries();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<SorceriesData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(sorceriesList);

        }

        setFilterInfo(
            sorceriesList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,sorceriesList])

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
                        <CardSorceries sorceries={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={styles.listName}>
                            Sorciries
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}