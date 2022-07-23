import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardNpc } from '../components/CardNpc';
import { SearchInfo } from '../components/SearchInfo';
import { useNpc } from '../hooks/useNpc';
import { NpcData } from '../interface/npcInterface';

export const NpcListScreen = () => {

    const { npcList } = useNpc();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<NpcData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(npcList);

        }

        setFilterInfo(
            npcList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,npcList])

    return (
        <ScrollView>
                        <SearchInfo 
                onDebounce={ (value) => setTerm( value ) }
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
                        <CardNpc npc={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white'

                        }}>
                            Npc
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
