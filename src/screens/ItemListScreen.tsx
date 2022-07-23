import React, { useEffect, useState } from 'react'
import { Button, FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardItem } from '../components/CardItem';
import { SearchInfo } from '../components/SearchInfo';
import { useItem } from '../hooks/useItem';
import { ItemData } from '../interface/itemsInterface';

export const ItemListScreen = () => {

    const { itemList, pages, setPages } = useItem();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<ItemData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(itemList);

        }

        setFilterInfo(
            itemList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,itemList])

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
                        <CardItem item={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop: 10,
                            color: 'white'

                        }}>
                            Items
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
                            disabled={itemList.length === 0}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
