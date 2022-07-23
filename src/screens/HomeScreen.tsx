import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AmmosData } from '../interface/ammosInterface'
import { ArmorData } from '../interface/armorInterface'
import { AshesData } from '../interface/ashesInterface'
import { BossData } from '../interface/bossInterface'
import { ClassData } from '../interface/classInterfaces'
import { CreatureData } from '../interface/creatureInterface'
import { IncantationData } from '../interface/incantationsInterface'
import { ItemData } from '../interface/itemsInterface'
import { NpcData } from '../interface/npcInterface'
import { ShieldData } from '../interface/shieldInterface'
import { SorceriesData } from '../interface/sorceriesInterface'
import { SpiritsData } from '../interface/spiritsInterface'
import { TalismanData } from '../interface/talismanInterface'

const windowwidth = Dimensions.get('window').width

interface Props {
    clases: ClassData,
    bosses: BossData,
    creatures: CreatureData,
    npc: NpcData,
    armor: ArmorData,
    shield: ShieldData,
    item: ItemData,
    ammos: AmmosData,
    talisman: TalismanData,
    spirits: SpiritsData,
    ashes: AshesData,
    incantation: IncantationData,
    sorceries: SorceriesData

}

export const HomeScreen = ({ clases, bosses, creatures, npc, armor, shield, item, ammos, talisman, spirits, ashes, incantation, sorceries }: Props) => {



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
                                style={styles.card}
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
                                style={styles.card}
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
                                style={styles.card}
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
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>NPC</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('ArmorListScreen', { ArmorData: armor })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/armor.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>ARMORS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('WeaponListScreen', { ArmorData: armor })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/weapon.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>WEAPONS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('ShieldListScreen', { ShieldData: shield })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/shield.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>SHIELDS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('ItemListScreen', { ItemData: item })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/item.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>ITEMS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('AmmosListScreen', { AmmosData: ammos })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/ammos.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>AMMOS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('TalismanListScreen', { TalismanData: talisman })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/talisman.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>TALISMANS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('SpiritsListScreen', { SpiritsData: spirits })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/spirits.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>SPIRITS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('AshesListScreen', { AshesData: ashes })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/ashes.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>ASHES</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCard}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('IncantationListScreen', { IncantationData: incantation })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/incantation.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>INCANTATIONS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            () => navigation.navigate('SorceriesListScreen', { SorceriesData: sorceries })}
                    >
                        <View>
                            <Image
                                source={require('../assets/image/sorceries.jpeg')}
                                style={styles.card}
                            />
                            <Text style={styles.homeTitle}>SORCERIES</Text>
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
    },
    card: {
        width: 180,
        height: 100,
        marginHorizontal: 10,
        borderRadius: 10
    }

})
