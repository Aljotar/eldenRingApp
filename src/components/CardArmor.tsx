import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ArmorData } from '../interface/armorInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    armor: ArmorData
}
export const CardArmor = ({ armor }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('ArmorScreen', { ArmorData: armor })
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
                        uri={armor.image}
                        style={styles.Image}
                    />
                    <View style={{ width: 115}}>
                        <Text style={styles.name}>
                            {armor.name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}