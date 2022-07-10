import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'ArmorScreen'> { };


export const ArmorScreen = ({ navigation, route }: Props) => {

    const { ArmorData } = route.params;

    const { name, image, description, category, dmgNegation, resistance, weight } = ArmorData;

    const armorNameArray = dmgNegation.map(dmgNegation => dmgNegation.name)

    const armorAmountArray = dmgNegation.map(dmgNegation => dmgNegation.amount)

    return (
        <>
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
                        <Icon name='shield-outline' size={25} color={'white'} /><Text style={styles.armorStats}>CATEGORY:  {category}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='barbell-outline' size={25} color={'white'} /><Text style={styles.armorStats}>WEIGTH:   {weight}</Text>
                    </View>
                    <Text style={{ fontWeight: '500', color: '#FFFFFF', marginTop: 20 }}>DAMAGE NEGATION:</Text>
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
        </>
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
        width: 150,
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