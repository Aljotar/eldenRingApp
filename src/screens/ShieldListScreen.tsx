import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardShield } from '../components/CardShield';
import { SearchInfo } from '../components/SearchInfo';
import { useShield } from '../hooks/useShield';
import { ShieldData } from '../interface/shieldInterface';
import { styles } from '../theme/appTheme';

export const ShieldListScreen = () => {

    const { shieldList } = useShield();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<ShieldData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(shieldList);

        }

        setFilterInfo(
            shieldList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,shieldList])

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
                        <CardShield shield={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={styles.listName}>
                            Shields
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
