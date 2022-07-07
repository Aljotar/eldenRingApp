import React from 'react'
import { Text, View } from 'react-native'
import { useClass } from '../hooks/useClass'

export const HomeScreen = () => {

    useClass();

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}
