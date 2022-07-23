import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NpcData } from '../interface/npcInterface'
import { SpiritsData } from '../interface/spiritsInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    spirits: SpiritsData
}

export const CardSpirits = ({ spirits }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('SpiritsScreen', { SpiritsData: spirits })
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
                        uri={spirits.image}
                        style={styles.Image}

                    />
                    <View style={{ width: 110}}>
                        <Text style={styles.name}>
                            {spirits.name}
                        </Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}