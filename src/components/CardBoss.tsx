import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { BossData } from '../interface/bossInterface'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    bosses: BossData
}

export const CardBoss = ({ bosses }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
        >

            <View style={{
                width: windowwidth * 0.55
            }}>

                <View style={{
                    ...styles.CardContainer,
                    width: windowwidth * 0.4
                }}>
                    <Text style={styles.name}>
                        {bosses.name}
                    </Text>
                </View>

                <FadeInImage
                    uri={bosses.image}
                    style={styles.classImage}

                />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        marginHorizontal: 20,
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
        height: 100,
        position: 'absolute',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        borderRadius: 10
    }
});