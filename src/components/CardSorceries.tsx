import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { IncantationData } from '../interface/incantationsInterface'
import { SorceriesData } from '../interface/sorceriesInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    sorceries: SorceriesData
}

export const CardSorceries = ({ sorceries }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress= {
                () => navigation.navigate('SorceriesScreen',{ SorceriesData: sorceries })
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
                        uri={sorceries.image}
                        style={styles.Image}

                    />
                    <Text style={styles.name}>
                        {sorceries.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}