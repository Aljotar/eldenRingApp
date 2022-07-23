import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardArmor } from '../components/CardArmor';
import { SearchInfo } from '../components/SearchInfo';
import { useArmor } from '../hooks/useArmor';
import { ArmorData } from '../interface/armorInterface';

export const ArmorListScreen = () => {

    const { armorList, pages, setPages } = useArmor();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<ArmorData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(armorList);

        }

        setFilterInfo(
            armorList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,armorList])

    const clickPagina = () => {
        setPages(pages - 1);
    };

    const anteriorDisabled = pages === 0;

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
                        <CardArmor armor={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop: 10,
                            color: 'white'

                        }}>
                            Armors
                        </Text>
                    )}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Button
                            onPress={clickPagina}
                            disabled={anteriorDisabled}
                            title="Anterior"
                            color="#292929"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Button
                            onPress={() => {
                                setPages(pages + 1)
                            }}
                            title="Siguiente"
                            color="#292929"
                            accessibilityLabel="Learn more about this purple button"
                            disabled={armorList.length === 0}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}