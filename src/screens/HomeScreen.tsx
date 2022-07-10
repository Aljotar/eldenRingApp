import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BossData } from '../interface/bossInterface'
import { ClassData } from '../interface/classInterfaces'
import { CreatureData } from '../interface/creatureInterface'

const windowwidth = Dimensions.get('window').width

interface Props {
    clases: ClassData,
    bosses: BossData,
    creatures: CreatureData

}

export const HomeScreen = ({ clases, bosses, creatures }: Props) => {



    const navigation = useNavigation()

    return (
        <>
            <Image
                source={require('../assets/image/eldenRing.jpeg')}
                style={{
                    width: windowwidth,
                    height: 400
                }}
            />
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
            </View>

        </>

    )
}

const styles = StyleSheet.create({
    homeTitle: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        alignSelf: 'center',
        top: 40,
        backgroundColor: 'black',
        opacity: 0.8,
        fontSize: 15
    },
    containerCard: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 10

    }
})
