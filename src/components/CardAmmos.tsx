import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { AmmosData } from '../interface/ammosInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    ammos: AmmosData
}

export const CardAmmos = ({ ammos }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress= {
                () => navigation.navigate('AmmosScreen',{ AmmosData: ammos })
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
                        uri={ammos.image}
                        style={styles.weaponImage}
                    />
                    <Text style={styles.name}>
                        {ammos.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}