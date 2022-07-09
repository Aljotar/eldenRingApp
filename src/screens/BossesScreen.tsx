import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'BossesSreen'> { };


export const BossesSreen = ({ navigation, route }: Props) => {

    const { BossData } = route.params

    console.log(BossData)


    return (
        <>
            <Text>asdasdas</Text>
        </>
    )
}
