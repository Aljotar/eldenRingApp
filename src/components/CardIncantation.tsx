import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { IncantationData } from '../interface/incantationsInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    incantation: IncantationData
}

export const CardIncantation = ({ incantation }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress= {
                () => navigation.navigate('IncantationScreen',{ IncantationData: incantation })
            }
        >

            <View style={{
                width: windowwidth * 0.51
            }}>


                <View style={{
                    ...styles.CardContainer,
                    width: windowwidth * 0.47
                }}>
                    <FadeInImage
                        uri={incantation.image}
                        style={styles.Image}

                    />
                    <Text style={styles.name}>
                        {incantation.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}