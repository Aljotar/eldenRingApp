import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NpcData } from '../interface/npcInterface'
import { SpiritsData } from '../interface/spiritsInterface'
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
            onPress= {
                () => navigation.navigate('SpiritsScreen',{ SpiritsData: spirits })
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
                        style={styles.bossImage}

                    />
                    <Text style={styles.name}>
                        {spirits.name}
                    </Text>



                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: '#242424',
        marginHorizontal: 5,
        height: 100,
        marginBottom: 25,
        borderRadius: 10,
        flexDirection: 'row',
        overflow: 'hidden'

    },
    name: {
        color: '#FFFFFF',
        fontSize: 9,
        fontWeight: 'bold',
        top: 20,
        left: 10,
        textAlignVertical: 'top',
        flexWrap: 'wrap'

    },
    bossImage: {
        width: 73,
        height: 100
    }
});