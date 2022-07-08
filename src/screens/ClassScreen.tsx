import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'ClassScreen'>{};

export const ClassScreen = ( { navigation, route }: Props ) => {

    const { ClassData } = route.params

    const { name,image, stats, description } = ClassData;


    return (
        <View style={styles.headerContainer}>
            <Text style={styles.className}>
                {name}
            </Text>
            <FadeInImage 
                uri={ image }
                style={styles.classImage}

            />
            <Text style={styles.classDescription}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 301,
    },
    className: {
        color: '#F8F8F8',
        fontSize: 40,
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        top: 100,
        left: 200,
        fontWeight: '500',
    },
    classImage: {
        width: 150,
        height: 250,
        top: 10
    },
    classDescription: {
        color: '#E9E9E9',
        fontSize: 15,
        textAlign: 'center',
        top: 25
    }
})
