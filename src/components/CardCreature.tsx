import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { CreatureData } from '../interface/creatureInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    creatures: CreatureData
}

export const Cardcreature = ({ creatures }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('CreatureScreen', { CreatureData: creatures })
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
                        uri={creatures.image}
                        style={styles.Image}

                    />
                    <View style={{ width: 114}}>
                        <Text style={styles.name}>
                            {creatures.name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}