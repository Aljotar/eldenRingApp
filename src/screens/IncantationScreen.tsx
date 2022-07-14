import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'IncantationScreen'> { };


export const IncantationScreen = ({ navigation, route }: Props) => {

    const { IncantationData } = route.params;

    const { id, name, image, description, type, cost, slots, effects, requires } = IncantationData;

    const incantationRequiresName = requires.map(requires => requires.name)
    const incantationReuiresAmount = requires.map(requires => requires.amount)

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
                <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: "500", padding: 20 }}>INFORMATION</Text>
                <View style={{ left: 20 }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icon name='help-outline' size={25} color={'white'} /><Text style={styles.armorStats}>Effect:  " {effects} "</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icon name='reader-outline' size={25} color={'white'} /><Text style={styles.armorStats}>Type:  " {type} "</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icon name='layers-outline' size={25} color={'white'} /><Text style={styles.armorStats}>Cost:  " {cost} "</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icon name='grid-outline' size={25} color={'white'} /><Text style={styles.armorStats}>Slots:  " {slots} "</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: '500', color: '#FFFFFF', marginTop: 20 }}>REQUIRES:</Text>
                <View style={{ flexDirection: 'row', left: 150, marginTop: 10 }}>
                    <View>
                        {
                            incantationRequiresName.map(function (incantationRequiresName) {
                                return <Text style={styles.armorStats}>{incantationRequiresName} :</Text>
                            })

                        }
                    </View>
                    <View>
                        {
                            incantationReuiresAmount.map(function (incantationReuiresAmount) {
                                return <Text style={styles.armorStats}>{incantationReuiresAmount}</Text>
                            })
                        }
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