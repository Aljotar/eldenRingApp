import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { AshesData } from '../interface/ashesInterface'
import { SpiritsData } from '../interface/spiritsInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    ashes: AshesData
}

export const CardAshes = ({ ashes }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('AshesScreen', { AshesData: ashes })
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
                        uri={ashes.image}
                        style={styles.Image}

                    />
                    <View style={{ width: 117}}>
                        <Text style={styles.name}>
                            {ashes.name}
                        </Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}