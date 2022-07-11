import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'AmmosScreen'> { };


export const AmmosScreen = ({ navigation, route }: Props) => {

    const { AmmosData } = route.params;

    const {name, image, description, type, attackPower, passive } = AmmosData;

    const armorNameArray = attackPower.map(attackPower => attackPower.name)

    const armorAmountArray = attackPower.map(attackPower => attackPower.amount)

    return (
        <ScrollView>
            <View>
                <FadeInImage
                    uri={image}
                    style={styles.armorImage}

                />
                <Text style={styles.armorName}>
                    {name}
                </Text>

                <Text style={styles.bossDescription}>{description}</Text>
            </View>


            <View style={styles.bossBody}>
                <Text style={{ fontSize: 23, color: '#FFFFFF', fontWeight: "400", padding: 10 }}>INFORMATION</Text>
                <View style={{ left: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='ellipsis-vertical-outline' size={25} color={'white'} /><Text style={styles.armorStats}>TYPE:  {type}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='color-wand-outline' size={25} color={'white'} /><Text style={styles.armorStats}>PASIVE:   {passive}</Text>
                    </View>
                    <Text style={{ fontWeight: '500', color: '#FFFFFF', marginTop: 20 }}>ATTACK POWER:</Text>
                    <View style={{flexDirection: 'row', left: 150, marginTop: 10}}>
                        <View>
                            {
                                armorNameArray.map(function (armorNameArray) {
                                    return <Text style={styles.armorStats}>{armorNameArray} :</Text>
                                })

                            }
                        </View>
                        <View>
                            {
                                armorAmountArray.map(function (armorAmountArray) {
                                    return <Text style={styles.armorStats}>{armorAmountArray}</Text>
                                })
                            }
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    armorName: {
        color: '#F8F8F8',
        fontSize: 20,
        alignSelf: 'center',
        alignItems: 'center',
        fontWeight: '500',
        marginBottom: 20
    },
    armorImage: {
        width: 250,
        height: 260,
        margin: 10,
        alignSelf: 'center'
    },
    bossDescription: {
        color: '#E9E9E9',
        fontSize: 15,
        textAlign: 'center',
    },
    bossBody: {
        width: 380,
        backgroundColor: '#151515',
        alignSelf: 'center',
        marginTop: 30,
        shadowColor: "#3A3A3A",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 2,
        paddingBottom: 50
    },
    armorStats: {
        color: 'white',
        marginLeft: 10,
        fontWeight: '500',
        top: 3
    },

})