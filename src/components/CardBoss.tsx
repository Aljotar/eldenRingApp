import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { BossData } from '../interface/bossInterface'
import { styles } from '../theme/appTheme'
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
            onPress= {
                () => navigation.navigate('BossesSreen',{ BossData: bosses })
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
                        uri={bosses.image}
                        style={styles.Image}

                    />
                    <Text style={styles.name}>
                        {bosses.name}
                    </Text>



                </View>

            </View>
        </TouchableOpacity>
    )
}