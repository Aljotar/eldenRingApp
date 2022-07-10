import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ArmorData } from '../interface/armorInterface'
import { BossData } from '../interface/bossInterface'
import { ClassData } from '../interface/classInterfaces'
import { CreatureData } from '../interface/creatureInterface'
import { NpcData } from '../interface/npcInterface'

const windowwidth = Dimensions.get('window').width

interface Props {
    clases: ClassData,
    bosses: BossData,
    creatures: CreatureData,
    npc: NpcData,
    armor: ArmorData

}

export const HomeScreen = ({ clases, bosses, creatures, npc, armor }: Props) => {



    const navigation = useNavigation()

    return (
        <ScrollView>
            <Image
                source={require('../assets/image/eldenRing.jpeg')}
                style={{
                    width: windowwidth,
                    height: 400
                }}
            />
            <View style={{ alignSelf: 'center' }}>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('ClassListScreen', { ClassData: clases })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/classes.jpeg')}
                                style={{
                                    width: 180,
                                    height: 100,
                                    marginHorizontal: 10
                                }}
                            />
                            <Text style={styles.homeTitle}>CLASS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('BossListScreen', { BossData: bosses })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/bosses.jpeg')}
                                style={{
                                    width: 180,
                                    height: 100,
                                    marginHorizontal: 10
                                }}
                            />
                            <Text style={styles.homeTitle}>BOSSES</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('CreatureListScreen', { CreatureData: creatures })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/creature.jpeg')}
                                style={{
                                    width: 180,
                                    height: 100,
                                    marginHorizontal: 10
                                }}
                            />
                            <Text style={styles.homeTitle}>CREATURES</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('NpcListScreen', { NpcData: npc })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/npc.jpeg')}
                                style={{
                                    width: 180,
                                    height: 100,
                                    marginHorizontal: 10
                                }}
                            />
                            <Text style={styles.homeTitle}>NPC</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('ArmorListScreen',{ ArmorData: armor  })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/armor.jpeg')}
                                style={{
                                    width: 180,
                                    height: 100,
                                    marginHorizontal: 10
                                }}
                            />
                            <Text style={styles.homeTitle}>ARMORS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    homeTitle: {
        fontWeight: '500',
        color: '#FFFFFF',
        position: 'absolute',
        alignSelf: 'center',
        top: 40,
        backgroundColor: '#858383',
        opacity: 0.7,
        fontSize: 15
    },
    containerCard: {
        flexDirection: 'row',
        padding: 3,
        marginTop: 10,

    }
})
