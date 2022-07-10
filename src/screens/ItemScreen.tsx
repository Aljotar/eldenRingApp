import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'ItemScreen'> { };


export const ItemScreen = ({ navigation, route }: Props) => {

    const { ItemData } = route.params;

    const { name, image, description, type, effect } = ItemData;


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
                <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: "500", padding: 20 }}>INFORMATION</Text>
                <View style={{ left: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='ellipsis-vertical-outline' size={25} color={'white'} /><Text style={styles.armorStats}>Type:  {type}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icon name='help-outline' size={25} color={'white'} /><Text style={styles.armorStats}>Effect:  " {effect} "</Text>
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