import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NpcData } from '../interface/npcInterface'
import { styles } from '../theme/appTheme'
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
            onPress={
                () => navigation.navigate('NpcScreen', { NpcData: npc })
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
                        style={styles.Image}
                    />
                    <View style={{ width: 110}}>
                        <Text style={styles.name}>
                            {npc.name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}