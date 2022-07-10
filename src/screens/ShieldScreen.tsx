import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'ShieldScreen'> { };

export const ShieldScreen = ({ navigation, route }: Props) => {

    const { ShieldData } = route.params

    const { name, image, description, attack, defence, scalesWith, requiredAttributes, category, weight } = ShieldData;


    const attackNameArray = attack.map(attack => attack.name)
    const attackAmountArray = attack.map(attack => attack.amount)

    const defenceNameArray = defence.map(defence => defence.name)
    const defenceAmountArray = defence.map(defence => defence.amount)

    const scalesWithNameArray = scalesWith.map(scalesWith => scalesWith.name)
    const scalesWithAmountArray = scalesWith.map(scalesWith => scalesWith.scaling)

    const requiredNameArray = requiredAttributes.map(requiredAttributes => requiredAttributes.name)
    const requiredAmountArray = requiredAttributes.map(requiredAttributes => requiredAttributes.amount)


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
                        <Icon name='apps-outline' size={25} color={'white'} /><Text style={styles.armorStats}>CATEGORY:  {category}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='barbell-outline' size={25} color={'white'} /><Text style={styles.armorStats}>WEIGTH:   {weight}</Text>
                    </View>
                    <Text style={{ fontWeight: '500', color: '#FFFFFF', marginTop: 20 }}>REQUIRED ATTRIBUTES:</Text>
                    <View style={{ flexDirection: 'row', left: 150, marginTop: 10 }}>
                        <View>
                            {
                                requiredNameArray.map(function (requiredNameArray) {
                                    return <Text style={styles.armorStats}>{requiredNameArray} :</Text>
                                })

                            }
                        </View>
                        <View>
                            {
                                requiredAmountArray.map(function (requiredAmountArray) {
                                    return <Text style={styles.armorStats}>{requiredAmountArray}</Text>
                                })
                            }
                        </View>
                    </View>
                    <Text style={{ fontWeight: '500', color: '#FFFFFF', marginTop: 20 }}>ATTACK:</Text>
                    <View style={{ flexDirection: 'row', left: 150, marginTop: 10 }}>
                        <View>
                            {
                                attackNameArray.map(function (attackNameArray) {
                                    return <Text style={styles.armorStats}>{attackNameArray} :</Text>
                                })

                            }
                        </View>
                        <View>
                            {
                                attackAmountArray.map(function (attackAmountArray) {
                                    return <Text style={styles.armorStats}>{attackAmountArray}</Text>
                                })
                            }
                        </View>
                    </View>
                    <Text style={{ fontWeight: '500', color: '#FFFFFF', marginTop: 20 }}>DEFENCE:</Text>
                    <View style={{ flexDirection: 'row', left: 150, marginTop: 10 }}>
                        <View>
                            {
                                defenceNameArray.map(function (defenceNameArray) {
                                    return <Text style={styles.armorStats}>{defenceNameArray} :</Text>
                                })

                            }
                        </View>
                        <View>
                            {
                                defenceAmountArray.map(function (defenceAmountArray) {
                                    return <Text style={styles.armorStats}>{defenceAmountArray}</Text>
                                })
                            }
                        </View>
                    </View>
                    <Text style={{ fontWeight: '500', color: '#FFFFFF', marginTop: 20 }}>SCALES WITH:</Text>
                    <View style={{ flexDirection: 'row', left: 150, marginTop: 10 }}>
                        <View>
                            {
                                scalesWithNameArray.map(function (scalesWithNameArray) {
                                    return <Text style={styles.armorStats}>{scalesWithNameArray} :</Text>
                                })

                            }
                        </View>
                        <View>
                            {
                                scalesWithAmountArray.map(function (scalesWithAmountArray) {
                                    return <Text style={styles.armorStats}>{scalesWithAmountArray}</Text>
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
        width: 230,
        height: 230,
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