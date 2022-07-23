import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { WeaponData } from '../interface/weaponInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    weapon: WeaponData
}

export const CardWeapon = ({ weapon }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('WeaponScreen', { WeaponData: weapon })
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
                        uri={weapon.image}
                        style={styles.weaponImage}

                    />
                    <View style={{ width: 103}}>
                        <Text style={styles.name}>
                            {weapon.name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}