import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage';
import { useClass } from '../hooks/useClass'

export const HomeScreen = () => {

    const { classList } = useClass();

    return (
        <>
            <FlatList
                data={classList}
                keyExtractor={(clase) => clase.id}
                renderItem={({ item }) => (
                    <FadeInImage
                        uri={ item.image }
                        style={{
                            width: 100,
                            height: 150
                        }}
                    />
                )}
            />
        </>
    )
}
