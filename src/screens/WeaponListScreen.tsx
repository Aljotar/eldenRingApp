import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardWeapon } from '../components/CardWeapon';
import { SearchInfo } from '../components/SearchInfo';
import { useWeapons } from '../hooks/useWeapons';
import { WeaponData } from '../interface/weaponInterface';
import { styles } from '../theme/appTheme';

export const WeaponListScreen = () => {

    const { weaponList, pages, setPages } = useWeapons();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<WeaponData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(weaponList);

        }

        setFilterInfo(
            weaponList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,weaponList])

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
                        <CardWeapon weapon={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={styles.listName}>
                            Weapons
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
                            disabled={weaponList.length === 0}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}