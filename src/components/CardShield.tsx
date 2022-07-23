import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { BossData } from '../interface/bossInterface'
import { ShieldData } from '../interface/shieldInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    shield: ShieldData
}

export const CardShield = ({ shield }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('ShieldScreen', { ShieldData: shield })
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
                        uri={shield.image}
                        style={styles.Image}
                    />
                    <View style={{ width: 110}}>
                        <Text style={styles.name}>
                            {shield.name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}