import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ScrollView } from 'react-native';
import { CardClass } from '../components/CardClass';
import { SearchInfo } from '../components/SearchInfo';
import { useClass } from '../hooks/useClass'
import { ClassData } from '../interface/classInterfaces';

export const ClassListScreen = () => {

    const { classList } = useClass();

    const [term, setTerm] = useState('')

    const [filterInfo, setFilterInfo] = useState<ClassData[]>([])

    useEffect(() => {
        
        if ( term.length === 0 ){
            return setFilterInfo(classList);

        }

        setFilterInfo(
            classList.filter(info => info.name.toLocaleLowerCase()
                            .includes( term.toLocaleLowerCase() ))
        );

    }, [term,classList])
    
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
                        <CardClass clases={item} />
                    )}

                    ListHeaderComponent={(
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginBottom: 50,
                            marginTop:10,
                            color: 'white',

                        }}>
                            Class
                        </Text>
                    )}
                />
            </View>
        </ScrollView>
    )
}
