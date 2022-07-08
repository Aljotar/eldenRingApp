import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ClassData } from '../interface/classInterfaces'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    clases: ClassData
}

export const CardClass = ({ clases }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress= { 
                () => navigation.navigate('ClassScreen', { ClassData: clases }) }
        >

            <View style={{
                ...styles.CardContainer,
                width: windowwidth * 0.4
            }}>

                <View>
                    <Text style={styles.name}>
                        {clases.name}
                    </Text>
                </View>

                <FadeInImage
                    uri={clases.image}
                    style={styles.classImage}

                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        marginHorizontal: 10,
        backgroundColor: '#242424',
        width: 160,
        height: 100,
        marginBottom: 25,
        borderRadius: 10,

    },
    name: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10

    },
    classImage: {
        width: 73,
        height: 120,
        position: 'absolute',
        right: -5,
        bottom: -2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
});
