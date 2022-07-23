import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardTalisman } from '../components/CardTalisman';
import { SearchInfo } from '../components/SearchInfo';
import { useTalisman } from '../hooks/useTalisman';
import { TalismanData } from '../interface/talismanInterface';
import { styles } from '../theme/appTheme';

export const TalismanListScreen = () => {

    const { talismanList } = useTalisman();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<TalismanData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(talismanList);

        }

        setFilterInfo(
            talismanList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,talismanList])

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
                        <CardTalisman talisman={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={styles.listName}>
                            Talismans
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
