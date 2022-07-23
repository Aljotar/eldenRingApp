import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { CreatureData } from '../interface/creatureInterface'
import { ItemData } from '../interface/itemsInterface'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    item: ItemData
}

export const CardItem = ({ item }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('ItemScreen', { ItemData: item })
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
                        uri={item.image}
                        style={styles.Image}

                    />
                    <View style={{ width: 110}}>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}