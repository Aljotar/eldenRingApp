import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'ClassScreen'>{};

export const ClassScreen = ( { navigation, route }: Props ) => {

    const { ClassData } = route.params


    return (
        <View>
            <Text>
                {  ClassData.name }
            </Text>
        </View>
    )
}
