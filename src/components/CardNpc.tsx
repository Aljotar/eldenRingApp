import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NpcData } from '../interface/npcInterface'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    npc: NpcData
}

export const CardNpc = ({ npc }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress= {
                () => navigation.navigate('NpcScreen',{ NpcData: npc })
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
                        uri={npc.image}
                        style={styles.bossImage}

                    />
                    <Text style={styles.name}>
                        {npc.name}
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